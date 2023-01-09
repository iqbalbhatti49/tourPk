import React, { useState } from "react";
import Switch from "react-switch";
import styles from "./InAppPlans.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { PriceCard } from "../../components/PriceCard/PriceCard";
import { Footer } from "../../components/Footer/Footer";

const InAppPlans = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <>
      <NavBar />
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
        {!checked && <div className={styles.plans}>
          <PriceCard theme="light" subTitle="For indiviuals" mainTitle="Basic" description="Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" price="$99" period="monthly" features={["All anaylytic features", "upto 250,000 tracked visits", "Normal Support"]} />
          <PriceCard theme="dark" subTitle="For startups" mainTitle="Pro" description="Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" price="$199" period="monthly" features={["All anaylytic features", "upto 500,000 tracked visits", "Premium Support"]} />
          <PriceCard theme="light" subTitle="For big companies" mainTitle="Enterprise" description="Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" price="$399" period="monthly" features={["All anaylytic features", "upto 1,000,000 tracked visits", "Dedicated Support"]} />
        </div>}
        {checked && <div className={styles.plans}>
          <PriceCard theme="light" subTitle="For indiviuals" mainTitle="Basic" description="Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" price="$199" period="annually" features={["All anaylytic features", "upto 250,000 tracked visits", "Normal Support"]} />
          <PriceCard theme="dark" subTitle="For startups" mainTitle="Pro" description="Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" price="$599" period="annually" features={["All anaylytic features", "upto 500,000 tracked visits", "Premium Support"]} />
          <PriceCard theme="light" subTitle="For big companies" mainTitle="Enterprise" description="Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" price="$999" period="annually" features={["All anaylytic features", "upto 1,000,000 tracked visits", "Dedicated Support"]} />
        </div>}
      </div>
      <Footer />
    </>
  );
};

export default InAppPlans;
