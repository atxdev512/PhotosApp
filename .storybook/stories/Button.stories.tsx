import React from "react"
import { View } from "react-native"
import { Button, ButtonProps } from "../../app/components"
import { Meta, StoryObj } from "@storybook/react-native"

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  args: {
    text: "Hello world",
  },
}

export default meta

type Story = StoryObj<ButtonProps>

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
        <View style={{ flex: 1, maxWidth: 300 }}>
          <Story />
        </View>
      </View>
    ),
  ],
}
