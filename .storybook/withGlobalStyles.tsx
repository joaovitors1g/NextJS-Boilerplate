import { Story } from '@storybook/react'
import GlobalStyles from '../src/styles/global'

export default function withGlobalStyles(Story: Story) {
  return (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
}
