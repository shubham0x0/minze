import { updateProps, UPDATE_TOKEN_REGISTERED } from '../actions/types';
import { IRootState } from '../reducers';

export const propsReducer = (state: IRootState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case updateProps.ABOVE_TAB_BAR:
      const props: any = action.payload;
      return { ...state, props: { ...state.props, aboveTopBar: props } };
    default:
      return state;
  }
};
