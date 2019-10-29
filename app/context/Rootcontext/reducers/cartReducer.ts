import { cart } from '../actions/types';
import { IRootState, ICartItem } from '.';

const updateTotal = (items: { [key: number]: ICartItem }) => {
  let total = 0;
  Object.values(items).forEach((item: ICartItem) => {
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
      const key = action.payload.dish_id;
      if (key) {
        if (action.payload.quantity < 1) {
          if (items[key] !== undefined) delete items[key];
        } else {
          items[key] = action.payload;
        }
      }
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
    default:
      return state;
  }
};
