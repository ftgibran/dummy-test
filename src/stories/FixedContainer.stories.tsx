import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {FixedContainer} from './FixedContainer'
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
