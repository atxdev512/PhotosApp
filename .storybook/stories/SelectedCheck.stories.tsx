import React from "react"
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { SelectedCheck } from "../../app/components/molecules/SelectedCheck"

const meta: Meta<{}> = {
  title: "SelectedCheck",
  component: () => <SelectedCheck />,
}

export default meta

type Story = StoryObj<{}>

export const Default: Story = {
  decorators: [
    (Story) => (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
          width: "100%",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
}
