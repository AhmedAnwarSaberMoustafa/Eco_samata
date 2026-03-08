import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsLength: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;

      if (!payload) {
        state.cartItemsLength++;
        return;
      }

      const itemId = String(payload.id ?? payload._id ?? '');
      if (!itemId) {
        return;
      }

      const quantity = Math.max(1, Number(payload.quantity) || 1);
      const size = payload.size || '';
      const color = payload.color || '';

      const existingItem = state.items.find(
        (item) => String(item.id) === itemId && item.size === size && item.color === color
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: itemId,
          img: payload.img || '',
          title: payload.title || 'Product',
          price: Number(payload.price) || 0,
          quantity,
          size,
          color,
          availableSizes: Array.isArray(payload.availableSizes) ? payload.availableSizes : (size ? [size] : []),
          availableColors: Array.isArray(payload.availableColors) ? payload.availableColors : (color ? [color] : []),
        });
      }

      state.cartItemsLength += quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.cartItemsLength = 0;
    },
    removeFromCart: (state, action) => {
      const { id, size = '', color = '' } = action.payload || {};
      const itemIndex = state.items.findIndex(
        (item) => String(item.id) === String(id) && item.size === size && item.color === color
      );

      if (itemIndex < 0) {
        return;
      }

      const deletedItem = state.items[itemIndex];
      state.cartItemsLength = Math.max(0, state.cartItemsLength - deletedItem.quantity);
      state.items.splice(itemIndex, 1);
    },
    updateQuantity: (state, action) => {
      const { id, size = '', color = '', quantity } = action.payload || {};
      const cartItem = state.items.find(
        (item) => String(item.id) === String(id) && item.size === size && item.color === color
      );

      if (!cartItem) {
        return;
      }

      const nextQuantity = Math.max(1, Number(quantity) || 1);
      const diff = nextQuantity - cartItem.quantity;
      cartItem.quantity = nextQuantity;
      state.cartItemsLength = Math.max(0, state.cartItemsLength + diff);
    },
    updateItemVariant: (state, action) => {
      const {
        id,
        oldSize = '',
        oldColor = '',
        newSize = '',
        newColor = '',
      } = action.payload || {};

      const cartItem = state.items.find(
        (item) => String(item.id) === String(id) && item.size === oldSize && item.color === oldColor
      );

      if (!cartItem) {
        return;
      }

      const targetSize = newSize || '';
      const targetColor = newColor || '';

      const duplicateItem = state.items.find(
        (item) =>
          item !== cartItem &&
          String(item.id) === String(id) &&
          item.size === targetSize &&
          item.color === targetColor
      );

      if (duplicateItem) {
        duplicateItem.quantity += cartItem.quantity;
        state.items = state.items.filter((item) => item !== cartItem);
        return;
      }

      cartItem.size = targetSize;
      cartItem.color = targetColor;
    },
  }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;