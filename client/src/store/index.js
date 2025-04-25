import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';

const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

  store.subscribe(() => {
    const cartState = store.getState().cart;
    localStorage.setItem("cart", JSON.stringify(cartState));
  });
  
export default store;