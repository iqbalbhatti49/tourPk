import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   checked: false,
   monthly: {
      basic: {
         name: 'Basic',
         description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
         price: "$99",
         features: ["All anaylytic features", "upto 25,000 tracked visits", "Normal Support"]
      },
      pro: {
         name: 'Pro',
         description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
         price: "$199",
         features: ["All anaylytic features", "upto 50,000 tracked visits", "Premium Support"]
      },
      enterprise: {
         name: 'Enterprise',
         description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
         price: "$399",
         features: ["All anaylytic features", "upto 500,000 tracked visits", "Dedicated Support"],
      },
   },
   annually: {
      basic: {
         name: 'Basic',
         description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
         price: "$199",
         features: ["All anaylytic features", "upto 250,000 tracked visits", "Normal Support"]
      },
      pro: {
         name: 'Pro',
         description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
         price: "$599",
         features: ["All anaylytic features", "upto 500,000 tracked visits", "Premium Support"]
      },
      enterprise: {
         name: 'Enterprise',
         description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
         price: "$999",
         features: ["All anaylytic features", "upto 1,000,000 tracked visits", "Dedicated Support"]
      },
   },
};

const pricingSlice = createSlice({
   name: 'pricing',
   initialState,
   reducers: {
      toggleChecked: (state, action) => {
         state.checked = action.payload;
      }
   },
});
export const { toggleChecked } = pricingSlice.actions;

export default pricingSlice.reducer;
