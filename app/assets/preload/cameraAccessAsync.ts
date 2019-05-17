import * as Permissions from 'expo-permissions';

// camera permissions
export const cameraAccessAsync = async () => {
  // get exisiting camera permissions first
  const { status: existingStatus } = await Permissions.getAsync(Permissions.CAMERA);
  let finalStatus = existingStatus;
  // ask again to grant camera permissions (if not already allowed)
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    finalStatus = status;
  }
  return finalStatus === 'granted';
};
