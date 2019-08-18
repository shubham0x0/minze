import { updateProps } from '../actions/types';
import { IRootState } from '../reducers';

export const propsReducer = (state: IRootState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case updateProps.ABOVE_TAB_BAR:
      const props = action.payload;
      return { ...state, props: { ...state.props, aboveTopBar: props } };
    default:
      return state;
  }
};
