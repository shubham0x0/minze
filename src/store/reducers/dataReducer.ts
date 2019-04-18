import {
  UPDATE_DATA,
  PHONE_VERIFICATION_SUCCESS,
  APP_LOGOUT,
} from '../actions/types';

const initialData = {};

export const dataReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case PHONE_VERIFICATION_SUCCESS:
      const { userPhoneNumber } = action;
      return {
        ...state,
        userPhoneNumber,
        isVerified: true,
      };
    case APP_LOGOUT:
      return {
        ...initialData,
      };
    default:
      return state;
  }
};
