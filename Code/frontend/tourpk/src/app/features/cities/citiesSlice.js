
import { createSlice } from '@reduxjs/toolkit';
import { Lahore, Rawalpindi, Faisalabad, Peshawar, Quetta, Zhob, Sibi, Mardan, Karachi, Hyderabad, Sukkur, Abbottabad } from './Data';

const initialState = {
   provinces: [
      {
         id: 1,
         name: 'Punjab',
         cities: [
            {
               id: 1,
               name: 'Lahore',
               title: 'Lahore, The Cultural Capital Of Pakistan',
               spots: Lahore
            },
            {
               id: 2,
               name: 'Faisalabad',
               title: 'Faisalabad, The Manchester Of Pakistan',
               spots: Faisalabad
            },
            {
               id: 3,
               name: 'Rawalpindi',
               title: 'Rawalpindi, The City Of Soldiers',
               spots: Rawalpindi
            },
         ]
      },
      {
         id: 2,
         name: 'Sindh',
         cities: [
            {
               id: 4,
               name: 'Karachi',
               title: 'Karachi, The City Of Lights',
               spots: Karachi
            },
            {
               id: 5,
               name: 'Hyderabad',
               title: 'Hyderabad, The City Of Saints',
               spots: Hyderabad
            },
            {
               id: 6,
               name: 'Sukkur',
               title: 'Sukkur, The City Of Sufis',
               spots: Sukkur
            },
         ]
      },
      {
         id: 3,
         name: 'Khyber Pakhtunkhwa',
         cities: [
            {
               id: 7,
               name: 'Peshawar',
               title: 'Peshawar, The Gateway to Central Asia',
               spots: Peshawar
            },
            {
               id: 8,
               name: 'Mardan',
               title: 'Mardan, The Land of Gandhara Civilization',
               spots: Mardan
            },
            {
               id: 9,
               name: 'Abbottabad',
               title: 'Abbottabad, The City of Pines and Schools',
               spots: Abbottabad
            },
         ]
      },
      {
         id: 4,
         name: 'Balochistan',
         cities: [
            {
               id: 10,
               name: 'Quetta',
               title: 'Quetta, The Fruit Garden of Pakistan',
               spots: Quetta
            },
            {
               id: 11,
               name: 'Sibi',
               title: 'Sibi, The Gateway to Balochistan',
               spots: Sibi
            },
            {
               id: 12,
               name: 'Zhob',
               title: 'Zhob, The Land of Orchards',
               spots: Zhob
            },
         ]
      }
   ]
};


const citiesSlice = createSlice({
   name: 'cities',
   initialState,
   reducers: {

   },
});
export const { } = citiesSlice.actions;

export default citiesSlice.reducer;
