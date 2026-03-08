import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../features/Cart/cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
});
