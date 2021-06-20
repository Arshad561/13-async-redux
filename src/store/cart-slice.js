import { createSlice } from '@reduxjs/toolkit';

const iniialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: iniialCartState,
  reducers: {
    addItemToCart(state, action) {
      state.changed = true;
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      state.totalQuantity--;
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items?.length ? action.payload.items: []
      state.totalQuantity = action.payload.totalQuantity;
    }
  }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
