import React from 'react';
// import Button from '../Button/Button';
import styles from './PriceCard.module.css';

export const PriceCard = (props) => {
   const { theme, subTitle, mainTitle, description, price, period, features } = props;
   let icon = "";
   const themeClass = theme === "light" ? styles.lightContainer : styles.darkContainer;
   const listIcon = theme === "light" ? "../static/images/filled-iconscheck-circle.svg" : "../static/images/filled-iconscheck-circle10.svg";
   // const btnType = theme === "light" ? "primary" : "secondary";
   if (mainTitle === "Enterprise")
      icon = "../static/images/enterprisePricePlan.svg";
   else if (mainTitle === "Basic")
      icon = "../static/images/basicPricePlan.svg";
   else
      icon = "../static/images/proPricePlan.svg";

   return (
      <div className={themeClass}>
         <div className={styles.header}>
            <img alt=""
               src={icon}
            />
            <div className={styles.title}>
               <div className={styles.subtitle}>{subTitle}</div>
               <strong className={styles.mainTitle}>{mainTitle}</strong>
            </div>
         </div>
         <p className={styles.description}>{description}</p>
         <div className={styles.pricing}>
            <p className={styles.price}>{price}</p>
            <div className={styles.period}>/{period}</div>
         </div>
         <strong><p>what's included</p></strong>
         <div className={styles.features}>
            {features.map((element, index) => {
               return (
                  <div key={index} className={styles.feature}>
                     <img
                        alt=""
                        src={listIcon}
                     />
                     <p>{element}</p>
                  </div>
               )
            }
            )}
         </div>
         {/* <Button value="Get Started" type={btnType} /> */}
      </div >
   );
};
