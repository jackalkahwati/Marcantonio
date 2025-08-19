#!/usr/bin/env node
// Build a simple static search index from Next.js app route files
// Scans src/app/**/page.tsx, extracts crude text, and writes public/search-index.json

import fs from 'fs'
import path from 'path'

const projectRoot = path.resolve(process.cwd())
const appDir = path.join(projectRoot, 'src', 'app')
const outputDir = path.join(projectRoot, 'public')
const outputFile = path.join(outputDir, 'search-index.json')
const ignoreRoutes = new Set([
  '/about/contact',
  '/contact',
  '/pricing'
])

function isPageFile(filePath) {
  return filePath.endsWith(path.join('page.tsx'))
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walk(fullPath))
    } else if (entry.isFile()) {
      files.push(fullPath)
    }
  }
  return files
}

function deriveRoute(filePath) {
  const rel = path.relative(appDir, filePath)
  const routePath = rel.replace(/\\/g, '/').replace(/\/page\.tsx$/, '')
  return routePath.length === 0 ? '/' : `/${routePath}`
}

function extractText(tsx) {
  // Remove imports/exports and TS types
  let text = tsx
    .replace(/import[^\n]*\n/g, ' ')
    .replace(/export\s+const\s+metadata[\s\S]*?\n\}/g, ' ')
    .replace(/export\s+default\s+function[\s\S]*?\{/g, ' ')
    .replace(/:\s*[A-Za-z_<>{}[\]|?,\s]+/g, ' ')

  // Remove JSX tags
  text = text.replace(/<[^>]+>/g, ' ')

  // Remove JS/TS expressions within braces
  text = text.replace(/\{[^}]*\}/g, ' ')

  // Remove common code-like lines
  text = text.replace(/^\s*'use client'\s*$/gmi, ' ')
  text = text.replace(/^\s*const\s+[^\n]*$/gmi, ' ')
  text = text.replace(/=>/g, ' ')
  text = text.replace(/\b(className|onClick|href|props|useState|useEffect)\b/g, ' ')

  // Remove short bracketed sequences that look like arrays/objects
  text = text.replace(/\[[^\]]{0,500}\]/g, ' ')
  text = text.replace(/\{[^\}]{0,500}\}/g, ' ')

  // Collapse whitespace
  text = text.replace(/\s+/g, ' ').trim()
  // Remove obvious code-like tokens
  const codePatterns = [
    /\b(use client|className|onClick|href|const|let|var|function|return|async|await)\b/gi
  ]
  for (const re of codePatterns) {
    text = text.replace(re, ' ')
  }
  return text
}

function buildIndex() {
  if (!fs.existsSync(appDir)) {
    console.error('No src/app directory found; skipping search index build')
    return
  }
  const allFiles = walk(appDir)
  const pageFiles = allFiles.filter(isPageFile)
  const index = []
  for (const file of pageFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8')
      const text = extractText(content)
      const route = deriveRoute(file)
      if (ignoreRoutes.has(route)) continue
      if (!text || text.length < 60) continue
      index.push({ route, text })
    } catch (e) {
      console.warn('Failed to index', file, e?.message || e)
    }
  }
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  fs.writeFileSync(outputFile, JSON.stringify({ pages: index }, null, 2))
  console.log(`Search index written to ${path.relative(projectRoot, outputFile)} (${index.length} pages)`) 
}

buildIndex()


