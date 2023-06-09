import React from "react";
import styles from "./RoomAmeneties.module.css";
import { FormField } from "../../components/index";
import { roomAmenities } from "../../utils/Constants/RoomAmenetiesOptions";

const RoomAmeneties = ({ values }) => {

  return (
    <>
      <h2>Room Ameneties</h2>
      <div className={styles.hotelAmeneties}>
        {
          roomAmenities.map((amenity) => (
            <div>
              <FormField
                key={amenity.name}
                name={amenity.name}
                label={amenity.label}
                type="checkbox"
                theme="light"
                value={values}
                renderIcon={() => null}
              />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default RoomAmeneties;
