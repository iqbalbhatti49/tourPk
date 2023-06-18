import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './SectionSearch.module.css';
import { IconLocation } from '../../components/IconLocation/IconLocation';
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from '../Dropdown/Dropdown';
import { Form as FormFinal } from 'react-final-form'
import axiosInstance from '../../utils/Api';
import { useNavigate } from 'react-router-dom';

export const SectionSearch = () => {
   const [service, setService] = useState(null);
   const [searchkey, setsearchkey] = useState("");
   const navigate = useNavigate();

   const searchItem = async () => {
      let servicee = service;
      servicee = servicee.replace(/\s+/g, ''); //remove spaces to avoid error in url
      const res = await axiosInstance.get(`/${servicee}/search${servicee}/${searchkey}`);
      navigate(`/searchResult/`, { state: { serviceType: servicee, results: res.data } });
   };

   const handleChange = (selectedOption) => {
      setService(selectedOption);
   };

   const onSubmit = (values) => {
      console.log(values);
   };

   return (
      <div className={styles.container}>
         <img className={styles.image} alt="Cities" src="../../static/images/searchSectionBg.png" />
         <div className={styles.content}>
            <p>Let's Your Curiosity do the booking!</p>
            <div className={styles.actions}>
               <div className={styles.inputIconed}>
                  <IconLocation />
                  <div className={styles.inputLabeled}>
                     <label className={styles.sLabel} htmlFor="location">Search</label>
                     <input className={styles.title} type="text" placeholder="Restaurant (eg. Howdy)" value={searchkey} onChange={(e) => setsearchkey(e.target.value)} />
                  </div>
               </div>
               <div className={styles.divider}></div>
               <div className={styles.inputIconed}>
                  <div className={styles.inputLabeled}>
                     <FormFinal
                        onSubmit={onSubmit}>
                        {({ handleSubmit, values }) => (
                           <form onSubmit={handleSubmit} className={styles.serviceType}>
                              <Dropdown
                                 name="serviceType"
                                 label="Service Type"
                                 optionsValues={[
                                    {
                                       "id": 1,
                                       "name": "Hotel",
                                    },
                                    {
                                       "id": 2,
                                       "name": "Restaurant",
                                    },
                                    {
                                       "id": 3,
                                       "name": "Tour Guide",
                                    },
                                    {
                                       "id": 4,
                                       "name": "Travel Agent",
                                    }
                                 ]}
                                 theme="light"
                                 value={service}
                                 placeholder="Choose Service Type"
                                 renderIcon={() => null}
                                 onChange={(selectedOption) => handleChange(selectedOption)}
                              />
                           </form>
                        )}
                     </FormFinal>
                  </div>
               </div>
               <Button type="primary" value="Search" btnType="button" handleClick={searchItem} />
            </div>
         </div>
      </div>
   );
};