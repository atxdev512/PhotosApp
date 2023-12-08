import AsyncStorage from "@react-native-async-storage/async-storage"
import photos from "assets/photos"

/**
 * AsyncStorage key for storing user's saved photos
 */
const USER_PHOTOS_KEY = "USER_PHOTOS"

/**
 * This function should simply return all available photos
 * @returns All of the photos available for the user to add
 */
function getAvailablePhotos() {
  return photos
}

/**
 * This function should simply return all available photos as
 * a key->value map
 * @returns All of the photos available for the user to add
 */
function getAvailablePhotosAsMap() {
  return photos.reduce((acc, current) => ({ ...acc, [current.id]: current }), {})
}

/**
 * This function should retrieve the user's currently saved photos
 * @returns User's saved photos
 */
async function getSavedPhotos() {
  try {
    const savedPhotosString = await AsyncStorage.getItem(USER_PHOTOS_KEY)
    if (savedPhotosString) {
      const photosAsMap = getAvailablePhotosAsMap()
      const imagesAsObjs = JSON.parse(savedPhotosString).map((photoId) => photosAsMap[photoId])
      return imagesAsObjs
    }
    return []
  } catch (error) {
    console.error("Error getting saved photos:", error)
    return []
  }
}

/**
 * This function should add the specified photos to the user's saved photos
 * @param ids - An array of ids matching the photos that should be added
 */
async function addPhotos(ids: string[]) {
  try {
    const savedPhotosString = await AsyncStorage.getItem(USER_PHOTOS_KEY)
    const savedPhotos = savedPhotosString ? JSON.parse(savedPhotosString) : []

    const newSavedPhotos = [...new Set([...savedPhotos, ...ids])]
    await AsyncStorage.setItem(USER_PHOTOS_KEY, JSON.stringify(newSavedPhotos))
  } catch (error) {
    console.error("Error adding photos:", error)
  }
}

/**
 * This function should remove the specified photos from the user's saved photos
 * @param ids - An array of ids matching the photos that should be removed
 */
async function removePhotos(ids: string[]) {
  try {
    const savedPhotosString = await AsyncStorage.getItem(USER_PHOTOS_KEY)
    const savedPhotos = savedPhotosString ? JSON.parse(savedPhotosString) : []

    const updatedSavedPhotos = savedPhotos.filter((id) => !ids.includes(id))
    await AsyncStorage.setItem(USER_PHOTOS_KEY, JSON.stringify(updatedSavedPhotos))
  } catch (error) {
    console.error("Error removing photos:", error)
  }
}

export default {
  getAvailable: getAvailablePhotos,
  getSaved: getSavedPhotos,
  add: addPhotos,
  remove: removePhotos,
}
