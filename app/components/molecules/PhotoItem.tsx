import { Image, ImageStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"
import { PhotoObjType } from "types"

type PhotoItemProps = TouchableOpacityProps & PhotoObjType

export const PhotoItem = ({ id, photo, ...props }: PhotoItemProps) => (
  <TouchableOpacity {...props} style={$itemStyle}>
    <Image style={$imageStyle} source={photo} />
  </TouchableOpacity>
)

const $itemStyle: ViewStyle = {
  height: 160,
  flex: 0.5,
  borderRadius: 16,
  overflow: "hidden",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}

const $imageStyle: ImageStyle = {
  height: "100%",
  width: "100%",
}
