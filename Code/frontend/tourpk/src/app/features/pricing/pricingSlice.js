import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/Api';

const initialState = {
   checked: false,
   monthly: {
      basic: {
         code: 'BasicMonthly',
         name: 'Basic',
         description: 'Enjoy the essentials with our Basic plan, offering access to our platform for tourists.',
         price: "$0",
         discount: '0',
         advancedSupport: false,
         features: ["Share Blogs", "0% Discount", "Basic Support"]
      },
      pro: {
         code: 'ProMonthly',
         name: 'Pro',
         description: 'Upgrade to our Pro plan for an enhanced experience. Get access to exclusive discounts to make your travel dreams a reality.',
         price: "$99",
         discount: '10',
         advancedSupport: false,
         features: ["Share Blogs", "10% Discount", "Basic Support"]
      },
      enterprise: {
         code: 'EnterpriseMonthly',
         name: 'Enterprise',
         description: 'For the ultimate travel experience, enjoy VIP discounts and 24/7 travel assistance from our dedicated team.',
         price: "$499",
         discount: '25',
         advancedSupport: true,
         features: ["Share Blogs", "25% Discount", "24/7 Support"],
      },
   },
   annually: {
      basic: {
         code: 'BasicAnnually',
         name: 'Basic',
         description: 'Get the Basic plan with an annual subscription and explore a wide range of tours and destinations.',
         price: "$199",
         discount: '5',
         advancedSupport: false,
         features: ["Share Blogs", "5% Discount", "Basic Support"]
      },
      pro: {
         code: 'ProAnnually',
         name: 'Pro',
         description: 'Upgrade to the Pro plan with an annual subscription and unlock more features.',
         price: "$599",
         discount: '15',
         advancedSupport: false,
         features: ["Share Blogs", "15% Discount", "Basic Support"]
      },
      enterprise: {
         code: 'EnterpriseAnnually',
         name: 'Enterprise',
         description: 'Experience the pinnacle of travel with our Enterprise plan and an annual subscription.',
         price: "$999",
         discount: '35',
         advancedSupport: true,
         features: ["Share Blogs", "35% Discount", "24/7 Support"]
      },
   },
   loading: false,
   successMessage: '',
   discount: 0,
   advancedSupport: false,
   error: '',
   planCode:""
};


export const updateUserWithPlanDetails = createAsyncThunk(
   'pricing/updateUserWithPlanDetails',
   async (payload) => {
     const { userId, discount, advancedSupport, planCode } = payload;
     try {
       const response = await axiosInstance.post('/auth/addPlan', {
         userId,
         discount,
         advancedSupport,
         planCode
       });
       return response.data;
     } catch (error) {
       console.log('Failed to update user with plan details:', error);
       throw error;
     }
   }
);

const pricingSlice = createSlice({
   name: 'pricing',
   initialState,
   reducers: {
     toggleChecked: (state, action) => {
       state.checked = action.payload;
     },
   },
   extraReducers: (builder) => {
     builder.addCase(updateUserWithPlanDetails.pending, (state) => {
       state.loading = true;
       state.successMessage = '';
       state.error = '';
     });
     builder.addCase(updateUserWithPlanDetails.fulfilled, (state, action) => {
       state.loading = false;
       const { discount, advancedSupport, planCode } = action.payload; 
       state.discount = discount;
       state.advancedSupport = advancedSupport;
       state.planCode = planCode
       state.successMessage = 'User plan details updated successfully.';
     });
     builder.addCase(updateUserWithPlanDetails.rejected, (state) => {
       state.loading = false;
       state.error = 'Failed to update user with plan details.';
     });
   },
});

export const { toggleChecked } = pricingSlice.actions;

export default pricingSlice.reducer;
