import React from "react";
import styles from "./AddHotelRoom.module.css";
import { AddRoom } from "../../components/index";
import { useLocation } from "react-router-dom";

const AddHotelRoom = () => {
  const location = useLocation();
  const hotelData = location.state;

  console.log("--> inside AddHotelRoom --> ", hotelData);

  return (
    <AddRoom hotelData={hotelData} />
  );
};

export default AddHotelRoom;
