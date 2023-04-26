import React from 'react';
import Button from '../Button/Button';
import styles from './SectionHierarchy.module.css';
import { CityCard } from "../../components/CityCard/CityCard";
import { cities } from "../../utils/FakeData.js"
import { Link } from 'react-router-dom';

export const SectionHierarchy = () => {
   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <p className={styles.heading}>
               It is Better to See Something Once Than to Listen about it a
               Thousand Times
            </p>
            <p className={styles.description}>
               Do what you can, with what you have, where you are.Do what you can, with what you have, where you are.Do what you can, with what you have, where you are.
            </p>
         </div>
         <div className={styles.content}>
            <CityCard city={cities[0]} />
            <div className={styles.centralContent}>
               <Link to="/cities">
                  <Button type="primary" value="Explore Cities" onClick />
               </Link>
               <div className={styles.cards}>
                  <CityCard city={cities[1]} />
                  <CityCard city={cities[2]} />
               </div>
            </div>
            <CityCard city={cities[3]} />
         </div>
      </div >
   );
};
