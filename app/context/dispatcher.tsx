// --HACK--
// this allows us to dispatch actions outside of the context
const dispatcher = {
  isReady: false,
  dispatch: (params: any) => {
    /* not ready */
  },
}

export default dispatcher
