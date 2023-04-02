
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   items: [
      {
         imageSrc: '../../static/images/booking.png',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         count: 2,
         price: '$19.99',
         discountedPrice: '$14.99',
         id: 1,
      },
      {
         imageSrc: '../../static/images/booking.png',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         count: 1,
         price: '$29.99',
         discountedPrice: '$24.99',
         id: 2,
      },
      {
         imageSrc: '../../static/images/booking.png',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         count: 1,
         price: '$29.99',
         discountedPrice: '$24.99',
         id: 3,
      },
   ],
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
   },
});

// Action creators are generated for each case reducer function
export const { removeItem, decreaseItem, increaseItem } = cartSlice.actions;

export default cartSlice.reducer;
