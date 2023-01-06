import React from 'react';
import styles from './IconStar.module.css';

export const IconStar = (props) => {
   const { rootClassName } = props;
   const classFill = rootClassName == "dark" ? styles.dark : styles.light;
   return (
      <>
         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="15.000000pt" height="15.000000pt" viewBox="0 0 30.000000 30.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
               fill="#f2c94c" stroke="none" className={styles.classFill}>
               <path d="M130 238 c-15 -42 -16 -43 -62 -46 -27 -2 -48 -7 -48 -11 0 -5 16
                  -19 35 -32 40 -28 39 -24 20 -78 -16 -47 -6 -53 35 -21 31 25 49 25 80 0 41
                  -32 51 -26 35 21 -19 54 -20 50 20 78 19 13 35 27 35 32 0 4 -21 9 -47 11 -47
                  3 -48 4 -63 46 -8 23 -17 42 -20 42 -3 0 -12 -19 -20 -42z"/>
            </g>
         </svg>
      </>
   );
};
