'use client'

import React from 'react'

type Item = { label: string; done?: boolean }

export default function Milestones({ items }: { items: Item[] }) {
  return (
    <div className="space-y-2">
      {items.map((m, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <span className={`inline-block w-2 h-2 rounded-full ${m.done ? 'bg-green-500' : 'bg-gray-300'}`} />
          <span className={m.done ? 'text-gray-800' : 'text-gray-500'}>{m.label}</span>
        </div>
      ))}
    </div>
  )
}


