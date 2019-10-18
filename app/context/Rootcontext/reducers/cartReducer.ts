import { cart } from '../actions/types';
import { IRootState } from '.';
export const cartReducer = (state: IRootState, action: any) => {
  const { items } = state.cart;

  switch (action.type) {
    case cart.UPDATE_CART:
      return { ...state, cart: action.payload };
    case cart.ADD_CART_ITEM:
      items[action.payload.dish_id] = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          items
        }
      };
    case cart.REMOVE_CART_ITEM:
      items[action.payload.dish_id] && delete items[action.payload.dish_id];
      return {
        ...state,
        cart: {
          ...state.cart,
          items
        }
      };
    default:
      return state;
  }
};
