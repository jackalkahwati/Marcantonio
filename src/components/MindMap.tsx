'use client'

import React, { useCallback, useRef, useEffect, useState, WheelEvent } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface Node {
  id: string
  label: string
  value: number
  color: string
  connections?: string[]
  x?: number
  y?: number
}

function FloatingNode({ x, y, node, isSelected, onClick }: { 
  x: number
  y: number
  node: Node
  isSelected?: boolean
  onClick?: (node: Node) => void
}) {
  const size = 30 + (node.value / 7.5)
  const [isDragging, setIsDragging] = useState(false)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  
  return (
    <motion.g
      onClick={() => onClick?.(node)}
      className="cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1,
        scale: isSelected ? 1.1 : 1,
        x: isDragging ? dragPosition.x : x,
        y: isDragging ? dragPosition.y : y
      }}
      drag
      dragConstraints={{ left: -1500, right: 1500, top: -1200, bottom: 1200 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setIsDragging(false)
        setDragPosition({ x, y })
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <motion.circle
        r={size}
        fill={`${node.color}40`}
        strokeWidth={isSelected ? 2 : 1}
        stroke={node.color}
        style={{
          filter: "blur(1px)",
        }}
      />
      
      <motion.text
        dy={size + 10}
        textAnchor="middle"
        fill="#374151"
        fontSize={isSelected ? "12px" : "10px"}
        fontWeight={isSelected ? "bold" : "normal"}
      >
        {node.label}
      </motion.text>
    </motion.g>
  )
}

function ConnectionLines({ nodes }: { nodes: Node[] }) {
  return (
    <>
      {nodes.map(node => 
        node.connections?.map(targetId => {
          const target = nodes.find(n => n.id === targetId)
          if (!target) return null
          
          return (
            <motion.line
              key={`${node.id}-${targetId}`}
              x1={node.x ?? 0}
              y1={node.y ?? 0}
              x2={target.x ?? 0}
              y2={target.y ?? 0}
              stroke={node.color}
              strokeOpacity={0.2}
              strokeWidth={1}
            />
          )
        })
      )}
    </>
  )
}

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="absolute top-4 left-4 z-10">
      <input
        type="text"
        placeholder="Search nodes..."
        className="w-[200px] px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

function CategoryFilter({ categories, onSelect }: { 
  categories: string[]
  onSelect: (category: string) => void 
}) {
  return (
    <div className="absolute top-4 right-4 z-10">
      <select
        className="w-[200px] px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => onSelect(e.target.value)}
        aria-label="Filter nodes by category"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  )
}

export default function MindMap() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const [initializedNodes, setInitializedNodes] = useState<Node[]>([])
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault()
    const delta = e.deltaY
    const newScale = Math.min(Math.max(scale - delta * 0.001, 0.1), 4)
    setScale(newScale)
  }

  const handleDragEnd = (event: any, info: any) => {
    setPosition({
      x: position.x + info.offset.x,
      y: position.y + info.offset.y
    })
  }

  const nodes: Node[] = [
    // Core Node
    {
      id: 'marcantonio',
      label: 'Marcantonio Global',
      value: 120,
      color: '#4169E1',
      connections: ['diu', 'darpa', 'afwerx', 'afc', 'onr', 'nsin', 'dds', 'dia', 'socom']
    },
    // Intelligence & Special Ops
    {
      id: 'dia',
      label: 'Defense Intelligence Agency',
      value: 90,
      color: '#800080',
      connections: ['darpa', 'nro', 'nga', 'cybercom']
    },
    {
      id: 'nro',
      label: 'National Reconnaissance Office',
      value: 90,
      color: '#800080',
      connections: ['nga', 'aerospace', 'lockheed']
    },
    {
      id: 'nga',
      label: 'National Geospatial Agency',
      value: 85,
      color: '#800080',
      connections: ['nro', 'palantir', 'maxar']
    },
    {
      id: 'socom',
      label: 'Special Operations Command',
      value: 90,
      color: '#800080',
      connections: ['sofwerx', 'anduril', 'shield_ai']
    },
    {
      id: 'sofwerx',
      label: 'SOFWERX',
      value: 80,
      color: '#800080',
      connections: ['socom', 'shield_ai', 'anduril']
    },
    // Innovation Units (Existing + New)
    {
      id: 'diu',
      label: 'Defense Innovation Unit',
      value: 90,
      color: '#32CD32',
      connections: ['afwerx', 'anduril', 'palantir', 'scale_ai', 'shield_ai', 'primer', 'rebellion']
    },
    {
      id: 'darpa',
      label: 'DARPA',
      value: 90,
      color: '#FF4500',
      connections: ['lincoln_lab', 'mitre', 'lockheed', 'northrop', 'raytheon']
    },
    {
      id: 'nsin',
      label: 'National Security Innovation Network',
      value: 85,
      color: '#32CD32',
      connections: ['diu', 'afwerx', 'rebellion', 'fedtech', 'innovare']
    },
    {
      id: 'dds',
      label: 'Defense Digital Service',
      value: 80,
      color: '#32CD32',
      connections: ['platform_one', 'kessel_run']
    },
    {
      id: 'fedtech',
      label: 'FedTech',
      value: 75,
      color: '#32CD32',
      connections: ['nsin', 'diu']
    },
    {
      id: 'innovare',
      label: 'Innovare Advancement Center',
      value: 75,
      color: '#32CD32',
      connections: ['nsin', 'afrl', 'rome_lab']
    },
    // Air Force (Existing + New)
    {
      id: 'afwerx',
      label: 'AFWERX',
      value: 85,
      color: '#9370DB',
      connections: ['spaceworks', 'anduril', 'platform_one', 'afrl']
    },
    {
      id: 'spaceworks',
      label: 'SpaceWERX',
      value: 80,
      color: '#9370DB',
      connections: ['northrop', 'lockheed', 'rocket_lab']
    },
    {
      id: 'platform_one',
      label: 'Platform One',
      value: 75,
      color: '#9370DB',
      connections: ['kessel_run', 'software_factory']
    },
    {
      id: 'kessel_run',
      label: 'Kessel Run',
      value: 75,
      color: '#9370DB',
      connections: ['software_factory']
    },
    {
      id: 'abms',
      label: 'Advanced Battle Management System',
      value: 85,
      color: '#9370DB',
      connections: ['afrl', 'northrop', 'lockheed']
    },
    {
      id: 'rome_lab',
      label: 'Rome Lab',
      value: 80,
      color: '#9370DB',
      connections: ['afrl', 'innovare']
    },
    {
      id: 'space_force',
      label: 'Space Systems Command',
      value: 85,
      color: '#9370DB',
      connections: ['spaceworks', 'rocket_lab', 'spacex', 'blue_origin']
    },
    {
      id: 'blue_origin',
      label: 'Blue Origin',
      value: 85,
      color: '#FF4500',
      connections: ['space_force', 'rocket_lab']
    },
    // Army (New Additions)
    {
      id: 'peo_soldier',
      label: 'PEO Soldier',
      value: 80,
      color: '#4169E1',
      connections: ['afc', 'devcom', 'microsoft']
    },
    {
      id: 'peo_gcs',
      label: 'PEO Ground Combat Systems',
      value: 80,
      color: '#4169E1',
      connections: ['gvsc', 'gdls', 'bae']
    },
    // Navy (New Additions)
    {
      id: 'peo_ships',
      label: 'PEO Ships',
      value: 80,
      color: '#32CD32',
      connections: ['navsea', 'hii', 'bath_iron']
    },
    {
      id: 'bath_iron',
      label: 'Bath Iron Works',
      value: 80,
      color: '#483D8B',
      connections: ['peo_ships', 'hii']
    },
    // Research Centers (New Additions)
    {
      id: 'sandia',
      label: 'Sandia National Labs',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'llnl', 'lanl']
    },
    {
      id: 'llnl',
      label: 'Lawrence Livermore National Lab',
      value: 85,
      color: '#87CEEB',
      connections: ['sandia', 'lanl']
    },
    {
      id: 'lanl',
      label: 'Los Alamos National Lab',
      value: 85,
      color: '#87CEEB',
      connections: ['sandia', 'llnl']
    },
    // Defense Industry - New Tech (New Additions)
    {
      id: 'primer',
      label: 'Primer AI',
      value: 75,
      color: '#FF1493',
      connections: ['diu', 'scale_ai']
    },
    {
      id: 'vannevar',
      label: 'Vannevar Labs',
      value: 75,
      color: '#FF1493',
      connections: ['diu', 'palantir']
    },
    {
      id: 'epirus',
      label: 'Epirus',
      value: 75,
      color: '#FF1493',
      connections: ['diu', 'anduril']
    },
    // Prime Contractors (New Additions)
    {
      id: 'l3harris',
      label: 'L3Harris Technologies',
      value: 85,
      color: '#483D8B',
      connections: ['raytheon', 'northrop']
    },
    {
      id: 'textron',
      label: 'Textron Systems',
      value: 85,
      color: '#483D8B',
      connections: ['gdls', 'bae']
    },
    {
      id: 'maxar',
      label: 'Maxar Technologies',
      value: 85,
      color: '#483D8B',
      connections: ['nga', 'spacex']
    },
    // International Partners
    {
      id: 'dstl',
      label: 'UK DSTL',
      value: 85,
      color: '#008080',
      connections: ['darpa', 'qinetiq']
    },
    {
      id: 'drdo',
      label: 'Indian DRDO',
      value: 85,
      color: '#008080',
      connections: ['darpa', 'hal']
    },
    {
      id: 'dsto',
      label: 'Australian DSTO',
      value: 85,
      color: '#008080',
      connections: ['darpa', 'thales']
    },
    // International Defense Companies
    {
      id: 'qinetiq',
      label: 'QinetiQ',
      value: 80,
      color: '#483D8B',
      connections: ['dstl', 'bae']
    },
    {
      id: 'thales',
      label: 'Thales Group',
      value: 85,
      color: '#483D8B',
      connections: ['dsto', 'naval_group']
    },
    {
      id: 'naval_group',
      label: 'Naval Group',
      value: 85,
      color: '#483D8B',
      connections: ['thales', 'dcns']
    },
    {
      id: 'hal',
      label: 'Hindustan Aeronautics',
      value: 80,
      color: '#483D8B',
      connections: ['drdo', 'boeing']
    },
    // Tech Giants
    {
      id: 'microsoft',
      label: 'Microsoft Defense',
      value: 90,
      color: '#FF1493',
      connections: ['diu', 'army_cloud', 'peo_soldier']
    },
    {
      id: 'amazon',
      label: 'AWS Defense',
      value: 90,
      color: '#FF1493',
      connections: ['diu', 'jedi', 'platform_one']
    },
    {
      id: 'google',
      label: 'Google Defense',
      value: 85,
      color: '#FF1493',
      connections: ['diu', 'darpa', 'maven']
    },
    // Additional Military Units
    {
      id: 'army_cloud',
      label: 'Army Enterprise Cloud',
      value: 80,
      color: '#4169E1',
      connections: ['microsoft', 'amazon']
    },
    {
      id: 'jedi',
      label: 'JEDI Program',
      value: 85,
      color: '#32CD32',
      connections: ['amazon', 'microsoft']
    },
    {
      id: 'maven',
      label: 'Project Maven',
      value: 85,
      color: '#32CD32',
      connections: ['google', 'palantir']
    },
    // Additional Research Centers
    {
      id: 'mit_ll',
      label: 'MIT Lincoln Laboratory',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'afrl', 'mitre']
    },
    {
      id: 'mitre',
      label: 'MITRE Corporation',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'mit_ll', 'aerospace']
    },
    {
      id: 'aerospace',
      label: 'Aerospace Corporation',
      value: 85,
      color: '#87CEEB',
      connections: ['space_force', 'nro', 'mitre']
    },
    {
      id: 'jhuapl',
      label: 'Johns Hopkins APL',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'onr', 'mit_ll']
    },
    {
      id: 'draper',
      label: 'Draper Laboratory',
      value: 80,
      color: '#87CEEB',
      connections: ['mit_ll', 'darpa', 'navy_labs']
    },
    // Additional Military Organizations
    {
      id: 'navair',
      label: 'Naval Air Systems Command',
      value: 85,
      color: '#32CD32',
      connections: ['onr', 'lockheed', 'boeing']
    },
    {
      id: 'spawar',
      label: 'Space and Naval Warfare Systems',
      value: 85,
      color: '#32CD32',
      connections: ['onr', 'navy_labs', 'northrop']
    },
    {
      id: 'navy_labs',
      label: 'Naval Research Labs',
      value: 85,
      color: '#32CD32',
      connections: ['onr', 'spawar', 'draper']
    },
    {
      id: 'afrl',
      label: 'Air Force Research Laboratory',
      value: 85,
      color: '#9370DB',
      connections: ['darpa', 'rome_lab', 'mit_ll']
    },
    {
      id: 'software_factory',
      label: 'Army Software Factory',
      value: 75,
      color: '#4169E1',
      connections: ['platform_one', 'kessel_run']
    },
    // Additional Defense Industry
    {
      id: 'palantir',
      label: 'Palantir Technologies',
      value: 85,
      color: '#FF1493',
      connections: ['diu', 'nga', 'maven']
    },
    {
      id: 'anduril',
      label: 'Anduril Industries',
      value: 85,
      color: '#FF1493',
      connections: ['diu', 'socom', 'afwerx']
    },
    {
      id: 'scale_ai',
      label: 'Scale AI',
      value: 80,
      color: '#FF1493',
      connections: ['diu', 'primer', 'maven']
    },
    {
      id: 'shield_ai',
      label: 'Shield AI',
      value: 80,
      color: '#FF1493',
      connections: ['diu', 'socom', 'afwerx']
    },
    {
      id: 'rebellion',
      label: 'Rebellion Defense',
      value: 80,
      color: '#FF1493',
      connections: ['diu', 'nsin', 'platform_one']
    },
    // Additional Prime Contractors
    {
      id: 'boeing',
      label: 'Boeing Defense',
      value: 90,
      color: '#483D8B',
      connections: ['navair', 'hal', 'space_force']
    },
    {
      id: 'northrop',
      label: 'Northrop Grumman',
      value: 90,
      color: '#483D8B',
      connections: ['darpa', 'spawar', 'space_force']
    },
    {
      id: 'raytheon',
      label: 'Raytheon Technologies',
      value: 90,
      color: '#483D8B',
      connections: ['darpa', 'l3harris', 'missile_defense']
    },
    {
      id: 'lockheed',
      label: 'Lockheed Martin',
      value: 90,
      color: '#483D8B',
      connections: ['darpa', 'navair', 'space_force']
    },
    {
      id: 'gdls',
      label: 'General Dynamics Land Systems',
      value: 85,
      color: '#483D8B',
      connections: ['peo_gcs', 'textron', 'bae']
    },
    // Additional Space Organizations
    {
      id: 'spacex',
      label: 'SpaceX',
      value: 90,
      color: '#FF4500',
      connections: ['space_force', 'maxar', 'rocket_lab']
    },
    {
      id: 'rocket_lab',
      label: 'Rocket Lab',
      value: 85,
      color: '#FF4500',
      connections: ['space_force', 'spacex', 'blue_origin']
    },
    {
      id: 'missile_defense',
      label: 'Missile Defense Agency',
      value: 85,
      color: '#FF4500',
      connections: ['darpa', 'raytheon', 'northrop']
    },
    // Additional International Organizations
    {
      id: 'nato_sto',
      label: 'NATO Science & Tech Org',
      value: 85,
      color: '#008080',
      connections: ['dstl', 'drdo', 'dsto']
    },
    {
      id: 'dcns',
      label: 'Naval Group Australia',
      value: 80,
      color: '#008080',
      connections: ['naval_group', 'dsto']
    },
    {
      id: 'rafael',
      label: 'Rafael Advanced Defense',
      value: 85,
      color: '#008080',
      connections: ['missile_defense', 'nato_sto']
    },
    {
      id: 'bae',
      label: 'BAE Systems',
      value: 85,
      color: '#483D8B',
      connections: ['qinetiq', 'gdls', 'peo_gcs']
    },
    // Additional Innovation Programs
    {
      id: 'devcom',
      label: 'Army DEVCOM',
      value: 85,
      color: '#4169E1',
      connections: ['peo_soldier', 'afc', 'software_factory']
    },
    {
      id: 'gvsc',
      label: 'Ground Vehicle Systems Center',
      value: 80,
      color: '#4169E1',
      connections: ['peo_gcs', 'gdls', 'devcom']
    },
    {
      id: 'navsea',
      label: 'Naval Sea Systems Command',
      value: 85,
      color: '#32CD32',
      connections: ['peo_ships', 'onr', 'bath_iron']
    },
    {
      id: 'onr',
      label: 'Office of Naval Research',
      value: 85,
      color: '#32CD32',
      connections: ['navy_labs', 'navsea', 'jhuapl']
    },
    {
      id: 'afc',
      label: 'Army Futures Command',
      value: 85,
      color: '#4169E1',
      connections: ['devcom', 'peo_soldier', 'software_factory']
    },
    // Additional Intelligence & Special Ops
    {
      id: 'cybercom',
      label: 'US Cyber Command',
      value: 90,
      color: '#800080',
      connections: ['dia', 'nsa', 'disa']
    },
    {
      id: 'nsa',
      label: 'National Security Agency',
      value: 90,
      color: '#800080',
      connections: ['cybercom', 'dia', 'disa']
    },
    {
      id: 'disa',
      label: 'Defense Info Systems Agency',
      value: 85,
      color: '#800080',
      connections: ['cybercom', 'nsa', 'platform_one']
    },
    {
      id: 'jsoc',
      label: 'Joint Special Operations Command',
      value: 90,
      color: '#800080',
      connections: ['socom', 'dia', 'afsocom']
    },
    {
      id: 'afsocom',
      label: 'Air Force Special Operations',
      value: 85,
      color: '#800080',
      connections: ['socom', 'jsoc', 'afsoc']
    },
    // Additional Research Labs
    {
      id: 'pnnl',
      label: 'Pacific Northwest National Lab',
      value: 85,
      color: '#87CEEB',
      connections: ['sandia', 'ornl', 'inl']
    },
    {
      id: 'ornl',
      label: 'Oak Ridge National Lab',
      value: 85,
      color: '#87CEEB',
      connections: ['pnnl', 'inl', 'anl']
    },
    {
      id: 'inl',
      label: 'Idaho National Lab',
      value: 85,
      color: '#87CEEB',
      connections: ['pnnl', 'ornl', 'cyber_labs']
    },
    {
      id: 'anl',
      label: 'Argonne National Lab',
      value: 85,
      color: '#87CEEB',
      connections: ['ornl', 'cyber_labs', 'quantum_labs']
    },
    {
      id: 'cyber_labs',
      label: 'Cybersecurity Labs',
      value: 80,
      color: '#87CEEB',
      connections: ['inl', 'anl', 'nsa']
    },
    // Additional Defense Industry
    {
      id: 'c3_ai',
      label: 'C3 AI Defense',
      value: 80,
      color: '#FF1493',
      connections: ['diu', 'palantir', 'databricks']
    },
    {
      id: 'databricks',
      label: 'Databricks Federal',
      value: 80,
      color: '#FF1493',
      connections: ['c3_ai', 'snowflake', 'platform_one']
    },
    {
      id: 'snowflake',
      label: 'Snowflake Federal',
      value: 80,
      color: '#FF1493',
      connections: ['databricks', 'platform_one', 'aws_defense']
    },
    {
      id: 'splunk',
      label: 'Splunk Federal',
      value: 80,
      color: '#FF1493',
      connections: ['diu', 'platform_one', 'cyber_labs']
    },
    {
      id: 'crowdstrike',
      label: 'CrowdStrike Federal',
      value: 80,
      color: '#FF1493',
      connections: ['diu', 'cybercom', 'nsa']
    },
    // Additional Military Research
    {
      id: 'quantum_labs',
      label: 'Quantum Research Labs',
      value: 85,
      color: '#87CEEB',
      connections: ['anl', 'darpa', 'afrl']
    },
    {
      id: 'space_labs',
      label: 'Space Research Labs',
      value: 85,
      color: '#87CEEB',
      connections: ['space_force', 'aerospace', 'nro']
    },
    {
      id: 'cyber_innovation',
      label: 'Cyber Innovation Labs',
      value: 80,
      color: '#87CEEB',
      connections: ['cybercom', 'nsa', 'disa']
    },
    // Additional International Partners
    {
      id: 'aus_dod',
      label: 'Australian DoD',
      value: 85,
      color: '#008080',
      connections: ['dsto', 'dcns', 'indo_pacific']
    },
    {
      id: 'uk_mod',
      label: 'UK Ministry of Defence',
      value: 85,
      color: '#008080',
      connections: ['dstl', 'qinetiq', 'nato_act']
    },
    {
      id: 'nato_act',
      label: 'NATO Allied Command Transform',
      value: 85,
      color: '#008080',
      connections: ['nato_sto', 'uk_mod', 'norway_defence']
    },
    {
      id: 'norway_defence',
      label: 'Norwegian Defence Research',
      value: 80,
      color: '#008080',
      connections: ['nato_act', 'kongsberg', 'nordic_defence']
    },
    {
      id: 'indo_pacific',
      label: 'Indo-Pacific Command',
      value: 85,
      color: '#008080',
      connections: ['aus_dod', 'japan_atla', 'rok_dapa']
    },
    // Additional Defense Companies
    {
      id: 'kongsberg',
      label: 'Kongsberg Defence',
      value: 80,
      color: '#483D8B',
      connections: ['norway_defence', 'raytheon', 'nordic_defence']
    },
    {
      id: 'saab',
      label: 'Saab Defense',
      value: 85,
      color: '#483D8B',
      connections: ['nordic_defence', 'bae', 'leonardo']
    },
    {
      id: 'leonardo',
      label: 'Leonardo Defense',
      value: 85,
      color: '#483D8B',
      connections: ['saab', 'thales', 'mbda']
    },
    {
      id: 'mbda',
      label: 'MBDA Systems',
      value: 85,
      color: '#483D8B',
      connections: ['leonardo', 'bae', 'thales']
    },
    {
      id: 'nordic_defence',
      label: 'Nordic Defence Cooperation',
      value: 85,
      color: '#008080',
      connections: ['saab', 'kongsberg', 'norway_defence']
    },
    // Additional Space Organizations
    {
      id: 'japan_atla',
      label: 'Japan ATLA',
      value: 85,
      color: '#008080',
      connections: ['indo_pacific', 'jaxa', 'rok_dapa']
    },
    {
      id: 'rok_dapa',
      label: 'ROK DAPA',
      value: 85,
      color: '#008080',
      connections: ['indo_pacific', 'japan_atla', 'korea_aerospace']
    },
    {
      id: 'jaxa',
      label: 'JAXA Space Agency',
      value: 85,
      color: '#FF4500',
      connections: ['japan_atla', 'space_force', 'space_labs']
    },
    {
      id: 'korea_aerospace',
      label: 'Korea Aerospace Industries',
      value: 85,
      color: '#483D8B',
      connections: ['rok_dapa', 'lockheed', 'boeing']
    },
    // Additional Military Units
    {
      id: 'afsoc',
      label: 'Air Force Special Ops Command',
      value: 85,
      color: '#9370DB',
      connections: ['afsocom', 'socom', 'air_warfare']
    },
    {
      id: 'air_warfare',
      label: 'Air Warfare Center',
      value: 85,
      color: '#9370DB',
      connections: ['afsoc', 'afrl', 'test_wing']
    },
    {
      id: 'test_wing',
      label: 'Test & Evaluation Wing',
      value: 80,
      color: '#9370DB',
      connections: ['air_warfare', 'afrl', 'edwards_afb']
    },
    {
      id: 'edwards_afb',
      label: 'Edwards Air Force Base',
      value: 85,
      color: '#9370DB',
      connections: ['test_wing', 'nasa_armstrong', 'space_force']
    },
    {
      id: 'nasa_armstrong',
      label: 'NASA Armstrong',
      value: 85,
      color: '#FF4500',
      connections: ['edwards_afb', 'space_force', 'nasa_jpl']
    },
    {
      id: 'nasa_jpl',
      label: 'NASA JPL',
      value: 85,
      color: '#FF4500',
      connections: ['nasa_armstrong', 'space_labs', 'aerospace']
    },
    // Additional Emerging Tech Nodes
    {
      id: 'quantum_computing',
      label: 'Quantum Computing Division',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_labs', 'ibm_quantum', 'google_quantum']
    },
    {
      id: 'ibm_quantum',
      label: 'IBM Quantum',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_computing', 'google_quantum', 'microsoft_quantum']
    },
    {
      id: 'google_quantum',
      label: 'Google Quantum AI',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_computing', 'ibm_quantum', 'rigetti']
    },
    {
      id: 'microsoft_quantum',
      label: 'Microsoft Quantum',
      value: 85,
      color: '#FF1493',
      connections: ['ibm_quantum', 'quantum_computing', 'azure_quantum']
    },
    {
      id: 'rigetti',
      label: 'Rigetti Computing',
      value: 80,
      color: '#FF1493',
      connections: ['google_quantum', 'quantum_labs', 'quantum_computing']
    },
    // Additional International Defense Partners
    {
      id: 'israel_mod',
      label: 'Israeli MOD',
      value: 85,
      color: '#008080',
      connections: ['rafael', 'elbit', 'iai']
    },
    {
      id: 'elbit',
      label: 'Elbit Systems',
      value: 85,
      color: '#483D8B',
      connections: ['israel_mod', 'iai', 'rafael']
    },
    {
      id: 'iai',
      label: 'Israel Aerospace Industries',
      value: 85,
      color: '#483D8B',
      connections: ['israel_mod', 'elbit', 'rafael']
    },
    // European Defense Organizations
    {
      id: 'occar',
      label: 'OCCAR',
      value: 85,
      color: '#008080',
      connections: ['nato_act', 'mbda', 'leonardo']
    },
    {
      id: 'eda',
      label: 'European Defence Agency',
      value: 85,
      color: '#008080',
      connections: ['occar', 'nato_act', 'pesco']
    },
    {
      id: 'pesco',
      label: 'PESCO',
      value: 80,
      color: '#008080',
      connections: ['eda', 'occar', 'nato_act']
    },
    // Additional Research Labs
    {
      id: 'lincoln_cyber',
      label: 'Lincoln Cyber Division',
      value: 85,
      color: '#87CEEB',
      connections: ['mit_ll', 'cyber_labs', 'nsa']
    },
    {
      id: 'aerospace_labs',
      label: 'Aerospace Research Labs',
      value: 85,
      color: '#87CEEB',
      connections: ['aerospace', 'space_labs', 'nasa_armstrong']
    },
    {
      id: 'defense_innovation',
      label: 'Defense Innovation Labs',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'diu', 'afwerx']
    },
    // Specialized Military Units
    {
      id: 'space_delta',
      label: 'Space Delta 6',
      value: 85,
      color: '#9370DB',
      connections: ['space_force', 'cybercom', 'space_labs']
    },
    {
      id: 'cyber_mission',
      label: 'Cyber Mission Force',
      value: 85,
      color: '#800080',
      connections: ['cybercom', 'nsa', 'cyber_labs']
    },
    {
      id: 'joint_ai',
      label: 'Joint AI Center',
      value: 85,
      color: '#32CD32',
      connections: ['darpa', 'diu', 'platform_one']
    },
    // Additional Defense Industry
    {
      id: 'azure_quantum',
      label: 'Azure Quantum Defense',
      value: 85,
      color: '#FF1493',
      connections: ['microsoft_quantum', 'quantum_computing', 'microsoft']
    },
    {
      id: 'aws_quantum',
      label: 'AWS Quantum Defense',
      value: 85,
      color: '#FF1493',
      connections: ['amazon', 'quantum_computing', 'aws_defense']
    },
    {
      id: 'honeywell_quantum',
      label: 'Honeywell Quantum',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_computing', 'quantum_labs', 'microsoft_quantum']
    },
    // Additional Space Organizations
    {
      id: 'space_dev',
      label: 'Space Development Agency',
      value: 85,
      color: '#FF4500',
      connections: ['space_force', 'missile_defense', 'darpa']
    },
    {
      id: 'space_rapid',
      label: 'Space RCO',
      value: 85,
      color: '#FF4500',
      connections: ['space_force', 'space_dev', 'spacex']
    },
    {
      id: 'space_command',
      label: 'US Space Command',
      value: 90,
      color: '#FF4500',
      connections: ['space_force', 'space_dev', 'nro']
    },
    // Additional Research Organizations
    {
      id: 'rand',
      label: 'RAND Corporation',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'mitre', 'aerospace']
    },
    {
      id: 'sei',
      label: 'Software Engineering Institute',
      value: 85,
      color: '#87CEEB',
      connections: ['platform_one', 'software_factory', 'cyber_labs']
    },
    {
      id: 'ida',
      label: 'Institute for Defense Analyses',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'rand', 'mitre']
    },
    // Additional Military Organizations
    {
      id: 'stratcom',
      label: 'US Strategic Command',
      value: 90,
      color: '#800080',
      connections: ['space_command', 'cybercom', 'missile_defense']
    },
    {
      id: 'transcom',
      label: 'US Transportation Command',
      value: 85,
      color: '#800080',
      connections: ['stratcom', 'indo_pacific', 'air_mobility']
    },
    {
      id: 'air_mobility',
      label: 'Air Mobility Command',
      value: 85,
      color: '#9370DB',
      connections: ['transcom', 'air_warfare', 'edwards_afb']
    },
    // Emerging Tech - AI & Machine Learning
    {
      id: 'ai_task_force',
      label: 'DoD AI Task Force',
      value: 85,
      color: '#FF1493',
      connections: ['joint_ai', 'darpa', 'diu']
    },
    {
      id: 'nvidia_defense',
      label: 'NVIDIA Defense',
      value: 85,
      color: '#FF1493',
      connections: ['ai_task_force', 'platform_one', 'joint_ai']
    },
    {
      id: 'intel_federal',
      label: 'Intel Federal',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_computing', 'platform_one', 'darpa']
    },
    // Cybersecurity Expansion
    {
      id: 'cyber_command_dev',
      label: 'Cyber Command Development',
      value: 85,
      color: '#800080',
      connections: ['cybercom', 'cyber_mission', 'platform_one']
    },
    {
      id: 'cert_coordination',
      label: 'CERT Coordination Center',
      value: 85,
      color: '#87CEEB',
      connections: ['sei', 'cyber_labs', 'cyber_mission']
    },
    {
      id: 'cyber_innovation_hub',
      label: 'Cyber Innovation Hub',
      value: 85,
      color: '#32CD32',
      connections: ['cyber_innovation', 'diu', 'nsin']
    },
    // Space Technology
    {
      id: 'space_systems_lab',
      label: 'Space Systems Laboratory',
      value: 85,
      color: '#FF4500',
      connections: ['space_dev', 'aerospace_labs', 'mit_ll']
    },
    {
      id: 'satellite_defense',
      label: 'Satellite Defense Division',
      value: 85,
      color: '#FF4500',
      connections: ['space_force', 'nro', 'space_dev']
    },
    {
      id: 'space_warfare',
      label: 'Space Warfare Center',
      value: 85,
      color: '#FF4500',
      connections: ['space_command', 'space_force', 'space_delta']
    },
    // International Expansion
    {
      id: 'french_dga',
      label: 'French DGA',
      value: 85,
      color: '#008080',
      connections: ['nato_act', 'thales', 'mbda']
    },
    {
      id: 'german_bwb',
      label: 'German BWB',
      value: 85,
      color: '#008080',
      connections: ['nato_act', 'rheinmetall', 'hensoldt']
    },
    {
      id: 'rheinmetall',
      label: 'Rheinmetall Defense',
      value: 85,
      color: '#483D8B',
      connections: ['german_bwb', 'krauss_maffei', 'hensoldt']
    },
    {
      id: 'hensoldt',
      label: 'HENSOLDT',
      value: 85,
      color: '#483D8B',
      connections: ['german_bwb', 'rheinmetall', 'thales']
    },
    {
      id: 'krauss_maffei',
      label: 'Krauss-Maffei Wegmann',
      value: 85,
      color: '#483D8B',
      connections: ['rheinmetall', 'german_bwb', 'gdls']
    },
    // Research & Development
    {
      id: 'applied_physics',
      label: 'Applied Physics Laboratory',
      value: 85,
      color: '#87CEEB',
      connections: ['jhuapl', 'darpa', 'mit_ll']
    },
    {
      id: 'lincoln_space',
      label: 'Lincoln Space Division',
      value: 85,
      color: '#87CEEB',
      connections: ['mit_ll', 'space_labs', 'aerospace']
    },
    {
      id: 'advanced_photonics',
      label: 'Advanced Photonics Lab',
      value: 85,
      color: '#87CEEB',
      connections: ['darpa', 'quantum_labs', 'lincoln_space']
    },
    // Defense Industry Expansion
    {
      id: 'red_hat_defense',
      label: 'Red Hat Defense',
      value: 85,
      color: '#FF1493',
      connections: ['platform_one', 'software_factory', 'ibm_quantum']
    },
    {
      id: 'vmware_federal',
      label: 'VMware Federal',
      value: 85,
      color: '#FF1493',
      connections: ['platform_one', 'aws_defense', 'microsoft']
    },
    {
      id: 'palo_alto_gov',
      label: 'Palo Alto Networks Gov',
      value: 85,
      color: '#FF1493',
      connections: ['cyber_command_dev', 'platform_one', 'crowdstrike']
    },
    // Military Research
    {
      id: 'directed_energy',
      label: 'Directed Energy Division',
      value: 85,
      color: '#9370DB',
      connections: ['afrl', 'darpa', 'advanced_photonics']
    },
    {
      id: 'hypersonics_lab',
      label: 'Hypersonics Laboratory',
      value: 85,
      color: '#9370DB',
      connections: ['afrl', 'darpa', 'nasa_armstrong']
    },
    {
      id: 'propulsion_lab',
      label: 'Propulsion Laboratory',
      value: 85,
      color: '#9370DB',
      connections: ['afrl', 'nasa_armstrong', 'rocket_lab']
    },
    // Army Innovation
    {
      id: 'army_ai_task_force',
      label: 'Army AI Task Force',
      value: 85,
      color: '#4169E1',
      connections: ['afc', 'joint_ai', 'ai_task_force']
    },
    {
      id: 'army_cyber_institute',
      label: 'Army Cyber Institute',
      value: 85,
      color: '#4169E1',
      connections: ['cyber_command_dev', 'software_factory', 'sei']
    },
    {
      id: 'army_space',
      label: 'Army Space Division',
      value: 85,
      color: '#4169E1',
      connections: ['space_command', 'afc', 'space_dev']
    },
    // Navy Innovation
    {
      id: 'navy_digital',
      label: 'Navy Digital Warfare Office',
      value: 85,
      color: '#32CD32',
      connections: ['onr', 'spawar', 'platform_one']
    },
    {
      id: 'submarine_tech',
      label: 'Submarine Technology Division',
      value: 85,
      color: '#32CD32',
      connections: ['navsea', 'onr', 'applied_physics']
    },
    {
      id: 'naval_future_force',
      label: 'Naval Future Force',
      value: 85,
      color: '#32CD32',
      connections: ['onr', 'navy_digital', 'darpa']
    },
    // Additional Defense Companies
    {
      id: 'leidos_defense',
      label: 'Leidos Defense',
      value: 85,
      color: '#483D8B',
      connections: ['platform_one', 'cyber_command_dev', 'space_dev']
    },
    {
      id: 'saic_defense',
      label: 'SAIC Defense',
      value: 85,
      color: '#483D8B',
      connections: ['platform_one', 'army_ai_task_force', 'space_dev']
    },
    {
      id: 'booz_allen',
      label: 'Booz Allen Hamilton',
      value: 85,
      color: '#483D8B',
      connections: ['platform_one', 'cyber_command_dev', 'joint_ai']
    },
    // Emerging Tech - Quantum & AI
    {
      id: 'quantum_defense',
      label: 'Quantum Defense Initiative',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_computing', 'darpa', 'quantum_labs']
    },
    {
      id: 'quantum_network',
      label: 'Quantum Network Lab',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_defense', 'quantum_computing', 'lincoln_cyber']
    },
    {
      id: 'quantum_crypto',
      label: 'Quantum Cryptography Division',
      value: 85,
      color: '#FF1493',
      connections: ['quantum_defense', 'nsa', 'cyber_labs']
    },
    {
      id: 'ai_weapons',
      label: 'AI Weapons Systems',
      value: 85,
      color: '#FF1493',
      connections: ['darpa', 'joint_ai', 'ai_task_force']
    },
    {
      id: 'ai_logistics',
      label: 'AI Logistics Command',
      value: 85,
      color: '#FF1493',
      connections: ['transcom', 'ai_task_force', 'platform_one']
    },
    // Space & Missile Defense
    {
      id: 'space_intel',
      label: 'Space Intelligence Division',
      value: 85,
      color: '#FF4500',
      connections: ['space_command', 'nro', 'space_force']
    },
    {
      id: 'space_cyber',
      label: 'Space Cyber Operations',
      value: 85,
      color: '#FF4500',
      connections: ['space_command', 'cybercom', 'space_delta']
    },
    {
      id: 'missile_warning',
      label: 'Missile Warning Center',
      value: 85,
      color: '#FF4500',
      connections: ['missile_defense', 'space_command', 'norad']
    },
    {
      id: 'norad',
      label: 'NORAD',
      value: 90,
      color: '#FF4500',
      connections: ['missile_warning', 'space_command', 'stratcom']
    },
    {
      id: 'space_defense',
      label: 'Space Defense Initiative',
      value: 85,
      color: '#FF4500',
      connections: ['space_force', 'missile_defense', 'darpa']
    },
    // International Defense Partners
    {
      id: 'japan_mod',
      label: 'Japan Ministry of Defense',
      value: 85,
      color: '#008080',
      connections: ['japan_atla', 'indo_pacific', 'jaxa']
    },
    {
      id: 'korea_mod',
      label: 'Korea Ministry of Defense',
      value: 85,
      color: '#008080',
      connections: ['rok_dapa', 'indo_pacific', 'korea_aerospace']
    },
    {
      id: 'canada_dnd',
      label: 'Canada DND',
      value: 85,
      color: '#008080',
      connections: ['norad', 'nato_act', 'uk_mod']
    },
    {
      id: 'italy_mod',
      label: 'Italian Ministry of Defense',
      value: 85,
      color: '#008080',
      connections: ['leonardo', 'nato_act', 'mbda']
    },
    {
      id: 'spain_mod',
      label: 'Spanish Ministry of Defense',
      value: 85,
      color: '#008080',
      connections: ['nato_act', 'indra', 'navantia']
    },
    // Defense Industry - International
    {
      id: 'indra',
      label: 'Indra Systems',
      value: 85,
      color: '#483D8B',
      connections: ['spain_mod', 'nato_act', 'thales']
    },
    {
      id: 'navantia',
      label: 'Navantia',
      value: 85,
      color: '#483D8B',
      connections: ['spain_mod', 'naval_group', 'bath_iron']
    },
    {
      id: 'diehl_defence',
      label: 'Diehl Defence',
      value: 85,
      color: '#483D8B',
      connections: ['german_bwb', 'mbda', 'rheinmetall']
    },
    {
      id: 'patria',
      label: 'Patria',
      value: 85,
      color: '#483D8B',
      connections: ['nordic_defence', 'kongsberg', 'saab']
    },
    {
      id: 'hanwha',
      label: 'Hanwha Defense',
      value: 85,
      color: '#483D8B',
      connections: ['korea_mod', 'rok_dapa', 'korea_aerospace']
    },
    // Research & Development - International
    {
      id: 'dsir',
      label: 'Indian DSIR',
      value: 85,
      color: '#87CEEB',
      connections: ['drdo', 'hal', 'quantum_labs']
    },
    {
      id: 'onera',
      label: 'French ONERA',
      value: 85,
      color: '#87CEEB',
      connections: ['french_dga', 'thales', 'mbda']
    },
    {
      id: 'dlr',
      label: 'German DLR',
      value: 85,
      color: '#87CEEB',
      connections: ['german_bwb', 'hensoldt', 'space_labs']
    },
    {
      id: 'csiro',
      label: 'Australian CSIRO',
      value: 85,
      color: '#87CEEB',
      connections: ['dsto', 'aus_dod', 'quantum_labs']
    },
    {
      id: 'weizmann',
      label: 'Weizmann Institute',
      value: 85,
      color: '#87CEEB',
      connections: ['israel_mod', 'rafael', 'quantum_defense']
    },
    // Military Research - Advanced Tech
    {
      id: 'biodefense',
      label: 'Biodefense Research Division',
      value: 85,
      color: '#9370DB',
      connections: ['darpa', 'afrl', 'army_futures']
    },
    {
      id: 'chem_defense',
      label: 'Chemical Defense Research',
      value: 85,
      color: '#9370DB',
      connections: ['darpa', 'army_futures', 'dtra']
    },
    {
      id: 'electronic_warfare',
      label: 'Electronic Warfare Division',
      value: 85,
      color: '#9370DB',
      connections: ['afrl', 'navair', 'darpa']
    },
    {
      id: 'autonomous_systems',
      label: 'Autonomous Systems Lab',
      value: 85,
      color: '#9370DB',
      connections: ['afrl', 'darpa', 'ai_weapons']
    },
    {
      id: 'advanced_robotics',
      label: 'Advanced Robotics Division',
      value: 85,
      color: '#9370DB',
      connections: ['darpa', 'army_futures', 'boston_dynamics']
    },
    // Defense Industry - Tech Companies
    {
      id: 'boston_dynamics',
      label: 'Boston Dynamics Defense',
      value: 85,
      color: '#FF1493',
      connections: ['advanced_robotics', 'darpa', 'army_futures']
    },
    {
      id: 'tesla_defense',
      label: 'Tesla Defense Systems',
      value: 85,
      color: '#FF1493',
      connections: ['ai_task_force', 'autonomous_systems', 'platform_one']
    },
    {
      id: 'apple_defense',
      label: 'Apple Defense & Security',
      value: 85,
      color: '#FF1493',
      connections: ['platform_one', 'quantum_crypto', 'ai_task_force']
    },
    {
      id: 'meta_defense',
      label: 'Meta Defense Technologies',
      value: 85,
      color: '#FF1493',
      connections: ['ai_task_force', 'platform_one', 'virtual_training']
    },
    {
      id: 'oracle_defense',
      label: 'Oracle Defense Cloud',
      value: 85,
      color: '#FF1493',
      connections: ['platform_one', 'aws_defense', 'cyber_command']
    },
    // Military Training & Simulation
    {
      id: 'virtual_training',
      label: 'Virtual Training Command',
      value: 85,
      color: '#4169E1',
      connections: ['meta_defense', 'army_futures', 'air_warfare']
    },
    {
      id: 'simulation_center',
      label: 'Defense Simulation Center',
      value: 85,
      color: '#4169E1',
      connections: ['virtual_training', 'army_futures', 'afrl']
    },
    {
      id: 'cyber_range',
      label: 'Cyber Range Operations',
      value: 85,
      color: '#4169E1',
      connections: ['cyber_command', 'army_cyber', 'virtual_training']
    },
    {
      id: 'battle_lab',
      label: 'Battle Laboratory',
      value: 85,
      color: '#4169E1',
      connections: ['army_futures', 'virtual_training', 'simulation_center']
    },
    {
      id: 'wargaming_center',
      label: 'Wargaming Center',
      value: 85,
      color: '#4169E1',
      connections: ['virtual_training', 'battle_lab', 'air_warfare']
    },
    // Defense Logistics & Support
    {
      id: 'logistics_command',
      label: 'Defense Logistics Command',
      value: 85,
      color: '#32CD32',
      connections: ['transcom', 'ai_logistics', 'dla']
    },
    {
      id: 'dla',
      label: 'Defense Logistics Agency',
      value: 85,
      color: '#32CD32',
      connections: ['logistics_command', 'transcom', 'ai_logistics']
    },
    {
      id: 'maintenance_command',
      label: 'Maintenance Command',
      value: 85,
      color: '#32CD32',
      connections: ['logistics_command', 'dla', 'army_futures']
    },
    {
      id: 'supply_chain',
      label: 'Defense Supply Chain',
      value: 85,
      color: '#32CD32',
      connections: ['dla', 'logistics_command', 'ai_logistics']
    },
    {
      id: 'industrial_base',
      label: 'Defense Industrial Base',
      value: 85,
      color: '#32CD32',
      connections: ['dla', 'logistics_command', 'maintenance_command']
    }
  ]

  // Get unique categories from nodes based on color
  const categories = Array.from(new Set(nodes.map(node => {
    switch(node.color) {
      case '#32CD32': return 'Innovation Units'
      case '#9370DB': return 'Air Force'
      case '#4169E1': return 'Army'
      case '#32CD32': return 'Navy'
      case '#87CEEB': return 'Research Centers'
      case '#FF1493': return 'Defense Industry'
      case '#483D8B': return 'Prime Contractors'
      case '#FF4500': return 'Space'
      default: return 'Other'
    }
  })))

  // Filter nodes based on search and category
  const filteredNodes = initializedNodes.filter(node => {
    const matchesSearch = node.label.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || getNodeCategory(node.color) === selectedCategory
    return matchesSearch && matchesCategory
  })

  function getNodeCategory(color: string): string {
    switch(color) {
      case '#32CD32': return 'Innovation Units'
      case '#9370DB': return 'Air Force'
      case '#4169E1': return 'Army'
      case '#32CD32': return 'Navy'
      case '#87CEEB': return 'Research Centers'
      case '#FF1493': return 'Defense Industry'
      case '#483D8B': return 'Prime Contractors'
      case '#FF4500': return 'Space'
      default: return 'Other'
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const width = 3600
    const height = 3000
    const centerX = 0
    const centerY = 0
    
    const positions = new Map<string, { x: number, y: number }>()
    
    // Place Marcantonio at center
    positions.set('marcantonio', { x: centerX, y: centerY })
    
    // Place first level nodes in a circle
    const firstLevel = ['diu', 'darpa', 'afwerx', 'afc', 'onr', 'nsin', 'dds', 'dia', 'socom']
    firstLevel.forEach((id, index) => {
      const angle = (index * 2 * Math.PI / firstLevel.length) - Math.PI/2
      positions.set(id, {
        x: centerX + Math.cos(angle) * 400,
        y: centerY + Math.sin(angle) * 400
      })
    })
    
    // Place remaining nodes
    const remainingNodes = nodes.filter(node => 
      !positions.has(node.id)
    )
    
    remainingNodes.forEach((node, index) => {
      const connectedTo = nodes.find(n => 
        n.connections?.includes(node.id)
      )
      
      if (connectedTo && positions.has(connectedTo.id)) {
        const basePos = positions.get(connectedTo.id)!
        const angle = ((index % 12) * 2 * Math.PI / 12) + Math.PI/6
        positions.set(node.id, {
          x: basePos.x + Math.cos(angle) * 300,
          y: basePos.y + Math.sin(angle) * 300
        })
      } else {
        const angle = (index * 2 * Math.PI / remainingNodes.length)
        positions.set(node.id, {
          x: centerX + Math.cos(angle) * 700,
          y: centerY + Math.sin(angle) * 700
        })
      }
    })
    
    const updatedNodes = nodes.map(node => ({
      ...node,
      ...positions.get(node.id)
    }))
    
    setInitializedNodes(updatedNodes)
  }, [nodes])

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-white relative overflow-hidden"
      style={{ height: 'calc(100vh - 64px)' }}
      onWheel={handleWheel}
    >
      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter categories={categories} onSelect={setSelectedCategory} />
      
      <motion.div
        drag
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
        }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="-2000 -1600 4000 3200"
          preserveAspectRatio="xMidYMid meet"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: "center",
            transition: "transform 0.1s ease-out"
          }}
        >
          <g>
            <ConnectionLines nodes={filteredNodes} />
            {filteredNodes.map((node) => (
              <FloatingNode
                key={node.id}
                x={node.x ?? 0}
                y={node.y ?? 0}
                node={node}
                isSelected={selectedNode?.id === node.id}
                onClick={setSelectedNode}
              />
            ))}
          </g>
        </motion.svg>
      </motion.div>

      {/* Zoom Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100"
          onClick={() => setScale(Math.min(scale + 0.1, 4))}
        >
          +
        </button>
        <button
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100"
          onClick={() => setScale(Math.max(scale - 0.1, 0.1))}
        >
          -
        </button>
        <button
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100"
          onClick={() => {
            setScale(1)
            setPosition({ x: 0, y: 0 })
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}