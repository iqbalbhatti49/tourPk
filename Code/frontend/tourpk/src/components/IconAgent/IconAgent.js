import React from 'react';
import styles from './IconAgent.module.css';

export const IconAgent = (props) => {
   const { rootClassName } = props;
   const classFill = rootClassName == "dark" ? styles.dark : styles.light;
   return (
      <>
         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30.000000pt" height="30.000000pt" viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none" className={classFill}>
               <path d="M411 594 c-12 -15 -21 -35 -21 -46 0 -24 44 -68 68 -68 33 0 72 38
               72 71 0 65 -80 93 -119 43z"/>
               <path d="M358 463 c-26 -31 -108 -163 -108 -176 0 -7 -7 -20 -14 -29 -11 -15
               -15 -16 -32 -3 -10 8 -30 15 -44 15 -48 0 -137 -162 -101 -184 4 -3 17 4 27
               15 15 17 26 20 56 15 36 -6 38 -5 76 51 22 32 55 76 73 99 19 22 42 51 52 65
               l18 24 -5 -33 c-3 -17 -1 -43 4 -57 7 -18 6 -24 -2 -22 -6 1 -16 -14 -21 -33
               -6 -19 -28 -61 -49 -93 -42 -61 -45 -90 -13 -95 20 -3 82 68 107 123 6 14 15
               25 19 25 4 0 26 -34 49 -76 34 -61 46 -75 64 -72 34 5 30 36 -17 144 -30 68
               -43 110 -40 130 l5 29 40 -38 c40 -38 70 -45 76 -16 1 8 -20 38 -48 66 -33 33
               -50 59 -50 75 0 54 -87 91 -122 51z"/>
            </g>
         </svg>
      </>
   );
};
