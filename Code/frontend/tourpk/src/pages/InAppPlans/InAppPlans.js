import React from "react";
import Switch from "react-switch";
import styles from "./InAppPlans.module.css";
import { Button, PriceCard, toggleChecked } from "../../components/index";
import { useSelector, useDispatch } from 'react-redux';

const InAppPlans = () => {

  const monthlyPricing = useSelector(state => state.pricing.monthly);
  const annualPricing = useSelector(state => state.pricing.annually);
  const checked = useSelector(state => state.pricing.checked);
  const pricing = checked ? annualPricing : monthlyPricing;
  const period = checked ? "annually" : "monthly";
  const dispatch = useDispatch();
  const handleChange = (checked) => {
    dispatch(toggleChecked(checked));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subHeading}>{`Plans & Pricing`}</p>
          <h1 className={styles.Heading}>Get Started Now</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            posuere vel venenatis eu sit massa volutpat.
          </p>
          <div className={styles.switchWrapper}>
            <p>Monthly</p>
            <Switch onChange={handleChange} checked={checked} uncheckedIcon={false} onColor="#004346" checkedIcon={false} />
            <p>Annually</p>
          </div>
        </div>
        <div className={styles.plans}>
          <PriceCard theme="light" subTitle="For indiviuals" mainTitle={pricing.basic.name} description={pricing.basic.description} price={pricing.basic.price} period={period} features={pricing.basic.features} />
          <PriceCard theme="dark" subTitle="For startups" mainTitle={pricing.pro.name} description={pricing.pro.description} price={pricing.pro.price} period={period} features={pricing.pro.features} />
          <PriceCard theme="light" subTitle="For big companies" mainTitle={pricing.enterprise.name} description={pricing.enterprise.description} price={pricing.enterprise.price} period={period} features={pricing.enterprise.features} />
        </div>
      </div>
    </>
  );
};

export default InAppPlans;
