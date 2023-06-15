import React from "react";
import styles from "./AddHotelRoom.module.css";
import { useLocation } from "react-router-dom";
import { Form as FormFinal } from "react-final-form";
import { FormField, Button } from "../../components/index";
import RoomAmeneties from "../../components/RoomAmeneties/RoomAmeneties";
import { required, validateAlpha } from "../../utils/validations";
import { roomAmenitiess } from "../../utils/Constants/RoomAmenetiesOptions";
import axiosInstance from "../../utils/Api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AddHotelRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const aaaaaaa = location.state;
  const userId = useSelector(state => state.user.id); // Id of currently logged in user
  const searchParams = new URLSearchParams(location.search);

  // Add more rooms logic
  const isAddRoomsMode = searchParams.get('moreRooms') === '1';
  const addMoreRooms = (values) => {
    values.availableRoomsCount = values.roomsCount;
    values.HotelId = location.state;
    const roomData = preProcess(values);
    axiosInstance.post("/hotel/addRoom", roomData);
    swal("New Room Added to Hotel", "Success! News Room(s) has been added to your hotel successfully.", "success");
    navigate(-1); // Go back to previous page hotel listing
  }

  // UPDATE Logic *******
  const isEditMode = searchParams.get('edit') === '1';
  console.log(isEditMode);
  let hotel, room, service;
  let updateInitialValue;
  if (isEditMode) {
    hotel = location.state.data.hotel;
    room = location.state.data.room;
    service = location.state.data.service;
    console.log("Updatw walaaaaaaaa****** ", location.state.data);
  }

  if (isEditMode) {
    const formatToFieldNames = (obj) => {
      const convertOptionsToValues = (options, features) => {
        return options.reduce((values, option) => {
          values[option] = features.includes(option);
          return values;
        }, {});
      };
      const amenitiesValues = convertOptionsToValues(roomAmenitiess.map(option => option.label), obj.roomAmenities.split(', '));
      // console.log(amenitiesValues);
      const obj1 = {
        id: obj.id,
        roomType: obj.roomType,
        description: obj.description,
        roomsCount: obj.roomsCount,
        availableRoomsCount: obj.availableRoomsCount,
        capacity: obj.capacity,
        rentPerNight: obj.rentPerNight,
        bedConfiguration: obj.bedConfiguration,
        view: obj.view,
        roomSize: obj.roomSize,
        smoking: obj.smoking,
        HotelId: obj.HotelId,
        ...amenitiesValues
      };
      return obj1;
    };

    updateInitialValue = formatToFieldNames(room[0]);
    console.log("Ye format hogya ha******", updateInitialValue);
  }

  const addInitialValue = {
    id: null,
    roomType: '',
    description: '',
    roomsCount: null,
    availableRoomsCount: null,
    capacity: null,
    rentPerNight: null,
    bedConfiguration: '',
    view: '',
    roomSize: '',
    smoking: '',
    HotelId: null
  };

  const initialValue = isEditMode ? updateInitialValue : addInitialValue;


  const preProcess = (values) => {
    // convert selected checkbox values to comma-separated string
    const roomAmenities = roomAmenitiess
      .filter(option => values[option.name])
      .map(option => option.label)
      .join(", ");
    for (const index in roomAmenitiess) {
      const { name } = roomAmenitiess[index];
      if (values.hasOwnProperty(name)) {
        delete values[name];
      }
    }
    const roomData = {
      ...values, roomAmenities
    }
    return roomData;
  };

  // ADD LOGIC **********

  const onSubmit = async (values) => {
    if (isAddRoomsMode) {
      addMoreRooms(values);
    }
    values.availableRoomsCount = values.roomsCount;
    const roomData = preProcess(values);

    let hotell, servicee, imagesArray, hotelRoom_A, hotelRoom_U;
    if (!isEditMode) {
      servicee = location.state.hotelData.service;
      let hotelAmenities = location.state.hotelData.hotelAmenities;
      imagesArray = servicee.images;
      delete servicee.images;
      hotell = {
        UserId: userId,
        amenities: hotelAmenities
      }

      hotelRoom_A = {
        service: servicee,
        hotel: hotell,
        images: imagesArray,
        room: roomData
      }
      console.log("Add wla object ********* ", hotelRoom_A);
    }

    if (isEditMode) {
      roomData.id = room[0].id;
      roomData.hotelId = room[0].HotelId;
      hotelRoom_U = {
        service: service,
        hotel: hotel,
        room: roomData
      }
      console.log("Update wla object ********* ", hotelRoom_U);
    }

    let roomObj;
    if (!isEditMode) {
      roomObj = await axiosInstance.post("/hotel/addHotel", hotelRoom_A);
      swal("Hotel and Room Added Successfully", "Success! The new Hotel entry has been added successfully.", "success");
    }
    else {
      roomObj = await axiosInstance.post("/hotel/updateHotel", hotelRoom_U);
      swal("Hotel and Room Updated Successfully", "Success! Changes has been updated successfully.", "success");
    }
    navigate(`/hotelListing/${roomObj.data}`);
  };


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Add New Room Type</h1>
        <div className={styles.content}>
          <div className={styles.formFields}>
            <FormFinal onSubmit={onSubmit}>
              {({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                  <FormField
                    name="roomType"
                    label="Room Type"
                    type="text"
                    placeholder="Single, Double, Suite"
                    validate={validateAlpha}
                    renderIcon={() => null}
                    defaultValue={initialValue.roomType}
                    theme="light"
                  />
                  <FormField
                    name="roomsCount"
                    label="Rooms Count with similar characteristics"
                    type="number"
                    placeholder="30"
                    validate={required}
                    renderIcon={() => null}
                    defaultValue={initialValue.roomsCount}
                    theme="light"
                  />

                  <FormField
                    name="capacity"
                    label="Occupancy"
                    type="number"
                    placeholder="2 persons"
                    validate={required}
                    renderIcon={() => null}
                    defaultValue={initialValue.capacity}
                    theme="light"
                  />

                  <FormField
                    name="bedConfiguration"
                    label="Bed Configuration"
                    type="text"
                    placeholder="King, Queen, Twin"
                    validate={validateAlpha}
                    renderIcon={() => null}
                    defaultValue={initialValue.bedConfiguration}
                    theme="light"
                  />

                  <FormField
                    name="view"
                    label="View"
                    type="text"
                    placeholder="City View, Ocean View"
                    validate={required}
                    renderIcon={() => null}
                    defaultValue={initialValue.view}
                    theme="light"
                  />

                  <FormField
                    name="roomSize"
                    label="Room Size"
                    type="text"
                    placeholder="300 sq. ft., 25 sq. m"
                    validate={required}
                    renderIcon={() => null}
                    defaultValue={initialValue.roomSize}
                    theme="light"
                  />

                  <FormField
                    name="description"
                    label="Room description"
                    type="text"
                    placeholder="Amazing ventilation with 3 windows, coffee table area..."
                    validate={required}
                    renderIcon={() => null}
                    defaultValue={initialValue.description}
                    theme="light"
                  />

                  <FormField
                    name="smoking"
                    label="Smoking Policy"
                    type="text"
                    placeholder="Smoking, Non-Smoking"
                    validate={validateAlpha}
                    renderIcon={() => null}
                    defaultValue={initialValue.smoking}
                    theme="light"
                  />

                  <FormField
                    name="rentPerNight"
                    label="Rent per Night (Rs.)"
                    type="number"
                    placeholder="Rs. 2000"
                    validate={required}
                    renderIcon={() => null}
                    defaultValue={initialValue.rentPerNight}
                    theme="light"
                  />
                  <RoomAmeneties values={values} updateInitialVal={updateInitialValue} isEditMode={isEditMode} />
                  <div className={styles.btnDiv}>
                    <Button
                      id={styles.signupBtn}
                      value={"Submit"}
                      type="primary"
                      btnType="submit"
                      width={250}
                    />
                  </div>
                </form>
              )}
            </FormFinal>
          </div>
          <div className={styles.imageContainer}>
            <img src="../static/images/hotelDetails.png" alt="FAQs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHotelRoom;
