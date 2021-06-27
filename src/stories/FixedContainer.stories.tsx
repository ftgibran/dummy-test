import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {FixedContainer} from './FixedContainer'
import {Card} from './Card'
import {DummyLeft} from './DummyLeft'
import {DummyRight} from './DummyRight'

export default {
  title: 'Example/FixedContainer',
  component: FixedContainer,
} as ComponentMeta<typeof FixedContainer>

const Template: ComponentStory<typeof FixedContainer> = (args) => (
  <FixedContainer {...args} />
)

export const Dummy = Template.bind({})
Dummy.args = {
  fixedView: <DummyLeft />,
  children: <DummyRight />,
}

export const WithCard = Template.bind({})
WithCard.args = {
  fixedView: (
    <div className={'p-4'}>
      <Card style={{width: 300, height: 2000}}>Left</Card>
    </div>
  ),
  children: (
    <div className={'p-4'}>
      <Card style={{width: 2000, height: 2000}}>Right</Card>
    </div>
  ),
}
