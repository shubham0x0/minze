export const tabbarVisible = (navigation: any) => {
  let showTabbar = true;
  if (navigation.state.index > 0) {
    showTabbar = false;
  }
  return showTabbar;
};
