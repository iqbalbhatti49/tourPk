import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   name: '',
   email: '',
   password: '',
   phoneNumber: '',
   role: '',
   businessTitle: '',
   loggedIn: false,
};


const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      updateUser: (state, action) => {
         state.name = action.payload.name;
         state.email = action.payload.email;
         state.password = action.payload.password;
         state.phoneNumber = action.payload.phoneNumber;
         state.role = action.payload.userType;
         if (action.payload.userType == "seller")
            state.businessTitle = action.payload.businessTitle;
      },
      loginUser: (state, action) => {
         state.email = action.payload.email;
         state.password = action.payload.password;
         state.loggedIn = true;
      }
   },
});
export const { updateUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
