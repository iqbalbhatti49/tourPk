import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   packages: [
      {
         id: 1,
         name: "Package 1",
         price: 50,
         description: "This is Package 1",
         validity: 30,
         servicesCount: 2,
         services: [
            {
               id: 1,
               title: "Service 1",
               description: "This is Service 1"
            },
            {
               id: 2,
               title: "Service 2",
               description: "This is Service 2"
            }
         ]
      },
      {
         id: 2,
         name: "Package 2",
         price: 100,
         description: "This is Package 2",
         validity: 60,
         servicesCount: 2,
         services: [
            {
               id: 3,
               title: "Service 3",
               description: "This is Service 3"
            },
            {
               id: 4,
               title: "Service 4",
               description: "This is Service 4"
            }
         ]
      }
   ]
};

export const packagesSlice = createSlice({
   name: 'packages',
   initialState,
   reducers: {
      addPackage: (state, action) => {
         const { PackageName, Price, Description, Validity, services } = action.payload;
         const newPackage = {
            id: state.packages.length + 1,
            PackageName,
            Price,
            Description,
            Validity,
            servicesCount: services.length,
            services
         };
         state.packages.push(newPackage);
      },
      updatePackages: (state, action) => {
         const { id, name, price, description, validity, services } = action.payload;
         const packageIndex = state.packages.findIndex(p => p.id === id);
         if (packageIndex >= 0) {
            const updatedPackage = {
               ...state.packages[packageIndex],
               name,
               price,
               description,
               validity,
               servicesCount: services.length,
               services
            };
            state.packages[packageIndex] = updatedPackage;
         }
      }
   },
});

export const { addPackage, updatePackages } = packagesSlice.actions;

export default packagesSlice.reducer;
