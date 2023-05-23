import React from 'react';
import styles from './IconHotel.module.css';

export const IconHotel = (props) => {
   const { rootClassName } = props;
   const classFill = rootClassName == "dark" ? styles.dark : styles.light;
   return (
      <>
         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30.000000pt" height="30.000000pt" viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none" className={classFill}>
               <path d="M60 510 c0 -20 5 -20 257 -18 236 3 258 4 261 21 3 16 -14 17 -257
               17 -255 0 -261 0 -261 -20z"/>
               <path d="M120 450 c0 -16 -7 -20 -35 -20 l-35 0 0 -160 0 -160 65 0 65 0 0 55
               0 55 140 0 140 0 0 -55 0 -55 65 0 65 0 0 160 0 160 -35 0 c-28 0 -35 4 -35
               20 0 13 -7 20 -20 20 -13 0 -20 -7 -20 -20 0 -18 -7 -20 -70 -20 -63 0 -70 2
               -70 20 0 13 -7 20 -20 20 -13 0 -20 -7 -20 -20 0 -18 -7 -20 -70 -20 -63 0
               -70 2 -70 20 0 13 -7 20 -20 20 -13 0 -20 -7 -20 -20z"/>
            </g>
         </svg>
      </>
   );
};
