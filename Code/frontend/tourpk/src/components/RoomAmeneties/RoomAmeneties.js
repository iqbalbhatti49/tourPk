import React from "react";
import styles from "./RoomAmeneties.module.css";
import { Form as FormFinal } from "react-final-form";
import { FormField } from "../../components/index";

const RoomAmeneties = () => {
  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  const roomAmenities = [
    { name: 'Air Conditioning', label: 'Air Conditioning' },
    { name: 'Television', label: 'Television' },
    { name: 'Mini-Fridge', label: 'Mini-Fridge' },
    { name: 'Coffee Maker', label: 'Coffee Maker' },
    { name: 'Iron and Ironing Board', label: 'Iron and Ironing Board' },
    { name: 'Hair Dryer', label: 'Hair Dryer' },
    { name: 'Work Desk', label: 'Work Desk' },
    { name: 'Seating Area', label: 'Seating Area' },
    { name: 'Telephone', label: 'Telephone' },
    { name: 'Wi-Fi', label: 'Wi-Fi' },
    { name: 'Blackout Curtains', label: 'Blackout Curtains' },
    { name: 'Complimentary Toiletries', label: 'Complimentary Toiletries' },
    { name: 'Bathrobe and Slippers', label: 'Bathrobe and Slippers' },
    { name: 'Room Service', label: 'Room Service' },
    { name: 'In-room Safe', label: 'In-room Safe' },
    { name: 'Soundproofing', label: 'Soundproofing' },
    { name: 'Extra Pillows and Blankets', label: 'Extra Pillows and Blankets' },
  ];
  return (
    <FormFinal onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
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
        </form>
      )}
    </FormFinal>
  );
};

export default RoomAmeneties;
