import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      products: [],
      totalPrice: 0,
    },
    reducers: {
      addToCart: (state, action) => {
        const item = action.payload;
      
        // Default quantity fallback
        const quantity = item.quantity ?? 1;
      
        const existing = state.products.find(p => p.id === item.id);
      
        if (existing) {
          existing.quantity += quantity;
        } else {
          state.products.push({ ...item, quantity });
        }
      
        // Přepočítat celkovou cenu
        state.totalPrice = state.products.reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        );
      },
      
      removeFromCart: (state, action) => {
        const id = action.payload;
        state.products = state.products.filter(p => p.id !== id);
  
        state.totalPrice = state.products.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      clearCart: (state) => {
        state.products = [];
        state.totalPrice = 0;
      },
    },
  });
  
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;