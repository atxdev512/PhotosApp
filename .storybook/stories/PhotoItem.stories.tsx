import React from "react"
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { PhotoItem, PhotoItemProps } from "../../app/components/molecules/PhotoItem"
import AVAILABLE_PHOTOS from "../../assets/photos"

const meta: Meta<PhotoItemProps> = {
  title: "PhotoItem",
  component: PhotoItem,
}

export default meta

type Story = StoryObj<PhotoItemProps>

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
  args: {
    ...AVAILABLE_PHOTOS[0],
  },
}

export const SelectionMode: Story = {
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
  args: {
    ...AVAILABLE_PHOTOS[0],
    selectionMode: true,
  },
}

export const Selected: Story = {
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
  args: {
    ...AVAILABLE_PHOTOS[0],
    selectionMode: true,
    selected: true,
  },
}
