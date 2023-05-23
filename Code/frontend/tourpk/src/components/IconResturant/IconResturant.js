import React from 'react';
import styles from './IconResturant.module.css';

export const IconResturant = (props) => {
   const { rootClassName } = props;
   const classFill = rootClassName == "dark" ? styles.dark : styles.light;
   return (
      <>
         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30.000000pt" height="30.000000pt" viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none" className={classFill}>
               <path d="M75 440 c-3 -6 -17 -7 -31 -4 l-25 6 6 -118 c3 -66 6 -148 8 -184 2
               -50 6 -65 17 -65 11 0 18 17 24 57 l8 58 39 0 38 0 -2 -52 c-2 -48 0 -53 24
               -61 14 -6 38 -7 53 -3 24 6 26 11 26 56 0 66 18 64 22 -2 l3 -53 35 0 c34 0
               35 1 38 43 4 53 22 55 22 2 0 -34 3 -40 26 -46 15 -4 39 -3 53 3 24 8 26 13
               24 61 l-2 52 38 0 39 0 8 -58 c6 -40 13 -57 24 -57 11 0 15 15 17 65 2 36 5
               118 8 184 l6 118 -25 -6 c-14 -3 -28 -2 -31 4 -11 18 -64 11 -75 -9 -11 -21
               -14 -159 -4 -185 7 -19 64 -22 83 -4 11 11 13 10 9 -2 -3 -10 -21 -16 -55 -18
               l-51 -3 -7 63 c-12 101 -7 98 -145 98 -138 0 -133 3 -145 -98 l-7 -63 -51 3
               c-34 2 -52 8 -55 18 -4 12 -2 13 9 3 19 -19 76 -16 83 3 10 26 7 164 -4 185
               -11 20 -64 27 -75 9z"/>
            </g>
         </svg>
      </>
   );
};
