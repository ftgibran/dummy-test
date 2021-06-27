import React, {useEffect, useRef, useState} from 'react'

export interface Props {
  fixedView?: React.ReactElement
  children?: React.ReactElement | React.ReactElement[] | string
}

export function FixedContainer({
  children,
  fixedView,
  ...props
}: Props &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  const ref = useRef<React.DetailedHTMLProps<any, any>>(null)

  const [height, setHeight] = useState<number>()

  useEffect(() => {
    setHeight(ref.current?.offsetHeight)
  }, [fixedView])

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
        <div className={'sticky left-0'}>
          <div
            style={{
              height,
              zIndex: -1,
            }}
            className={'absolute inset-0 bg-gray-200'}
          />

          <div ref={ref}>{fixedView}</div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  )
}
