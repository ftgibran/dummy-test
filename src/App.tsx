import React from 'react'
import {FixedContainer} from './stories/FixedContainer'
import {DummyRight} from './stories/DummyRight'
import {DummyLeft} from './stories/DummyLeft'

export function App() {
  return (
    <div>
      <FixedContainer fixedView={<DummyLeft />}>
        <DummyRight />
      </FixedContainer>
    </div>
  )
}
