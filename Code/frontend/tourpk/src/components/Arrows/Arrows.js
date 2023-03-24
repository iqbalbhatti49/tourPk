import React, { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import styles from './Arrows.module.css';

function Arrow({ direction }) {
   const { isFirstItemVisible, isLastItemVisible, visibleElements, scrollPrev, scrollNext } = useContext(VisibilityContext);
   const [disabled, setDisabled] = useState(true);

   useEffect(() => {
      if (visibleElements.length) {
         setDisabled(direction === 'left' ? isFirstItemVisible : isLastItemVisible);
      }
   }, [direction, isFirstItemVisible, isLastItemVisible, visibleElements]);

   return (
      <svg
         width="15.000000pt" height="15.000000pt" viewBox="0 0 50.000000 50.000000"
         className={`${styles.arrow} ${direction === 'left' ? styles.left : styles.right}`}
         onClick={direction === 'left' ? () => scrollPrev() : () => scrollNext()}
         style={{ opacity: disabled ? 0.5 : 1 }}
      >
         <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
                  -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
                  167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c128 -58 164
                  -223 72 -328 -101 -115 -283 -88 -348 52 -79 171 104 354 276 276z"/>
            {direction === 'left' ?
               <path d="M220 305 l-55 -55 57 -57 c32 -31 61 -54 65 -50 4 4 -15 30 -42 57
                  l-49 50 47 48 c26 26 47 51 47 55 0 17 -19 4 -70 -48z"/>
               :
               <path d="M210 353 c0 -4 21 -29 47 -55 l47 -48 -49 -50 c-27 -27 -46 -53 -42
               -57 4 -4 33 19 65 50 l57 57 -55 55 c-51 52 -70 65 -70 48z"/>
            }
         </g>
      </svg>
   );
}

export const Arrows = () => (
   <div className={styles.arrows}>
      <Arrow direction="left" />
      <Arrow direction="right" />
   </div>
);
