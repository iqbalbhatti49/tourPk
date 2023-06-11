import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   items: [],
};

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      removeItem: (state, action) => {
         console.log('action.payload', action.payload)
         state.items = state.items.filter(item => item.id !== action.payload);
      },
      increaseItem: (state, action) => {
         console.log('action.payload', action.payload)
         const item = state.items.find(item => item.id === action.payload);
         item.count++;
      },
      decreaseItem: (state, action) => {
         const item = state.items.find(item => item.id === action.payload);
         console.log(item.count)
         if (item.count > 1) {
            item.count--;
         }
      },
      addItem: (state, action) => {
         const newItem = {
            imageSrc: action.payload.imageSrc,
            title: action.payload.title,
            count: 1,
            price: action.payload.price,
            discountedPrice: action.payload.discountedPrice,
            id: state.items.length + 1,
         };
         state.items.push(newItem);
      },
      clearCart: (state) => {
      state.items = [];
      },
   },
});

export const { removeItem, decreaseItem, increaseItem, addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
