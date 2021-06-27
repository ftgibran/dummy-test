import React from 'react'

export function DummyLeft() {
  return (
    <svg height="2000" width="300" id="left">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{stopColor: 'rgb(255, 255, 0)', stopOpacity: 1}}
          />
          <stop
            offset="100%"
            style={{stopColor: 'rgb(255, 0, 0)', stopOpacity: 1}}
          />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="2000" fill="url(#grad1)" />
      <line
        x1="0"
        y1="0"
        x2="300"
        y2="2000"
        style={{stroke: 'black', strokeWidth: 2}}
      />
    </svg>
  )
}
