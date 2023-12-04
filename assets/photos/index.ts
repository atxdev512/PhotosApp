import { type ImageSourcePropType } from "react-native"
import photo1 from "./photo-1.jpg"
import photo2 from "./photo-2.jpg"
import photo3 from "./photo-3.jpg"
import photo4 from "./photo-4.jpg"
import photo5 from "./photo-5.jpg"
import photo6 from "./photo-6.jpg"
import photo7 from "./photo-7.jpg"
import photo8 from "./photo-8.jpg"
import photo9 from "./photo-9.jpg"
import photo10 from "./photo-10.jpg"
import photo11 from "./photo-11.jpg"
import photo12 from "./photo-12.jpg"
import photo13 from "./photo-13.jpg"
import photo14 from "./photo-14.jpg"
import photo15 from "./photo-15.jpg"

export default [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
].map((photo, index) => ({
  id: `photo-${index}`,
  photo,
}))
