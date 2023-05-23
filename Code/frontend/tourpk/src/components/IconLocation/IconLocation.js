import React from 'react';
import styles from './IconLocation.module.css';

export const IconLocation = (props) => {
   const { rootClassName } = props;
   const classFill = rootClassName == "light" ? styles.light : styles.dark;
   return (
      <>
         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="15.000000pt" height="15.000000pt" viewBox="0 0 50.000000 50.000000"
            preserveAspectRatio="xMidYMid meet" className={classFill}>
            <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" stroke="none">
               <path d="M191 483 c-55 -29 -76 -65 -76 -133 1 -49 8 -73 48 -152 25 -51 56
                  -104 67 -118 l20 -25 20 25 c41 52 111 205 116 255 12 116 -98 199 -195 148z
                  m99 -93 c11 -11 20 -29 20 -40 0 -26 -34 -60 -60 -60 -26 0 -60 34 -60 60 0
                  11 9 29 20 40 11 11 29 20 40 20 11 0 29 -9 40 -20z"/>
               <path d="M89 145 c-99 -31 -102 -88 -7 -121 75 -26 261 -26 336 0 97 33 92 90
               -11 121 -28 8 -54 15 -58 15 -3 0 -21 -25 -40 -55 -50 -83 -68 -83 -118 0 -19
               30 -39 55 -45 54 -6 0 -32 -7 -57 -14z"/>
            </g>
         </svg>
      </>
   );
};
