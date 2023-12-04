import photos from "assets/photos"

/**
 * ! NOTE: We aren't prescribing any particular solution for persistence
 * ! here, but users should be able to quit and relaunch the app
 * ! without losing all of their saved photos. In React Native for mobile,
 * ! you'll typically want to use AsyncStorage for this, and in web you'll
 * ! likely want to use LocalStorage. However, feel free to do
 * ! your own thing. It's also fine to layer your interactions with
 * ! persisted storage beneath a state management library.
 */

/**
 * This function should simply return all available photos
 * @returns All of the photos available for the user to add
 */
function getAvailablePhotos() {
  return photos
}

/**
 * This function should retrieve the user's currently saved photos
 */
function getSavedPhotos() {
  // TODO: You should add some logic here
}

/**
 * This function should add the specified photos to the user's saved photos
 * @param ids - An array of ids matching the photos that should be added
 */
function addPhotos(ids: string[]) {
  // TODO: You should add some logic here
}

/**
 * This function should remove the specified photos from the user's saved photos
 * @param ids - An array of ids matching the photos that should be removed
 */
function removePhotos(ids: string[]) {
  // TODO: You should add some logic here
}

export default {
  getAvailable: getAvailablePhotos,
  getSaved: getSavedPhotos,

  add: addPhotos,
  remove: removePhotos,
}
