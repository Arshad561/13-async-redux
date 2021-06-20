import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  cartIsVisible: false,
  notification: null
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;