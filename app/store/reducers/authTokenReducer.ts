export const authTokenReducer = (state = null, action: any) => {
  if (action.type === 'UPDATE_AUTH_TOKEN') {
    // console.warn('UPDATE_AUTH_TOKEN: ' + action.payload);
    return action.payload;
  }
  return state;
};
