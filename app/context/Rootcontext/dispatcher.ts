const dispatcher = {
  isReady: false,
  /*
   * Before using dispatcher check if isReady is true
   * this dispatcher is used when we want to dispatch action
   * outside of the context
   */
  dispatch: (params: any) => {},
}

export default dispatcher
