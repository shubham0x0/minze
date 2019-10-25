import { cart } from '../actions/types';
import { IRootState, ICartItem } from '.';

const updateTotal = (cartItems: { [key: number]: ICartItem }) => {
  let total = 0;
  Object.values(cartItems).forEach((item: ICartItem) => {
    total += item.quantity * item.amount_per_item;
  });
  return total;
};
export const cartReducer = (state: IRootState, action: any) => {
  switch (action.type) {
    case cart.UPDATE_CART:
      return { ...state, cart: action.payload };
    case cart.ADD_CART_ITEM:
      const { items } = state.cart;
      action.payload.dish_id && (items[action.payload.dish_id] = action.payload);
      const total = updateTotal(items);
      return {
        ...state,
        cart: {
          ...state.cart,
          total: {
            discount: '',
            amount: total.toString()
          },
          items
        }
      };
    case cart.REMOVE_CART_ITEM:
      const cartItems = state.cart.items;
      const key = action.payload.dish_id;
      if (key && cartItems[key] !== undefined) delete cartItems[key];
      return {
        ...state,
        cart: {
          ...state.cart,
          items: cartItems
        }
      };
    default:
      return state;
  }
};
