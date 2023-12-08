import React from "react"
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { EmptyListProps, EmptyList } from "../../app/components/molecules/EmptyList"

const meta: Meta<EmptyListProps> = {
  title: "EmptyList",
  component: EmptyList,
  args: {
    notice: "Nothing to see here",
  },
}

export default meta

type Story = StoryObj<EmptyListProps>

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
