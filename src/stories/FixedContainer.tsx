import React from 'react'

export interface Props {
  fixedView?: React.ReactElement
  children?: React.ReactElement | React.ReactElement[] | string
}

export function FixedContainer({children, fixedView, ...props}: Props) {
  return (
    <div {...props}>
      <div
        className={
          'flex flex-row overflow-scroll bg-gray-200 border-2 border-dashed border-green-600 shadow-lg'
        }
        style={{
          marginLeft: '8vw',
          marginTop: '10vh',
          height: '80vh',
          width: '84vw',
        }}
      >
        <div className={'sticky left-0'}>{fixedView}</div>
        <div>{children}</div>
      </div>
    </div>
  )
}
