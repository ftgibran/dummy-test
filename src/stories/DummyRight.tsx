import React from 'react'

export function DummyRight() {
  return (
    <svg height="2000" width="2000" id="right">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'green', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'blue', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="2000" height="2000" fill="url(#grad2)" />
      <line
        x1="0"
        y1="0"
        x2="2000"
        y2="2000"
        style={{stroke: 'black', strokeWidth: 2}}
      />
    </svg>
  )
}
