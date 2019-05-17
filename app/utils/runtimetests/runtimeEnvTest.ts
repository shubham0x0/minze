export const runtimeEnvTest = (keys: { [key: string]: string }) => {
  Object.keys(keys).forEach(key => {
    if (keys[key] === undefined || keys[key] === '') {
      throw new Error(`${key}: value is required`);
    }
  });
};
