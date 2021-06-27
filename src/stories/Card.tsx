import React from 'react'

export interface Props {
  children?: React.ReactElement | React.ReactElement[] | string
}

export function Card({
  children,
  ...props
}: Props &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div {...props}>
      <div className={'h-full p-4 bg-white rounded-lg shadow-lg'}>
        {children}
      </div>
    </div>
  )
}
