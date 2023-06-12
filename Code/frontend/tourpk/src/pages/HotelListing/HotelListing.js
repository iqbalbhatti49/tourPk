import React, { useEffect, useState } from 'react'
import styles from './HotelListing.module.css'
import { Button, Carousel, ReviewForm, Rating, Testimonial, HotelBooking } from '../../components/index';
import { useLocation, useParams } from "react-router";
import axiosInstance from '../../utils/Api';
import { IconEdit, IconDelete } from "../../components/index";
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addHotelBooking } from '../../app/features/bookings/bookingsSlice'; 

export default function HotelListing() {
  const currentUser = useSelector(state => state.user.id);
  const location = useLocation();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [reviewCount, setreviewCount] = useState(5);
  const [ratingAverge, setratingAverge] = useState(4.5);
  const [loading, setLoading] = useState(true);
  
  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Listing!',
      icon: 'warning',
      buttons: ['Cancel', 'Confirm'],
      dangerMode: true,
    }).then((clickedBtn) => {
      if (clickedBtn) {
        console.log('User clicked on confirm');
        const ids = {
          ServiceId: data.Service.id,
          HotelId: data.Hotel.id
        };
        // axiosInstance.post(`/deleteHotel/`, ids);
        // navigate("/");
      } else {
        console.log('User clicked on "Cancel"');
      }
    });
  }

  const getHotel = async () => {
    try {
      const response = await axiosInstance.get(`/hotel/getHotelById/${id}`);
      const { Service: { Reviews, ...serviceData }, HotelImages, ...restData } = response.data;
      const Hotel = restData;
      const Service = serviceData;
      const HotelData = {
        Service,
        Hotel,
        Reviews,
        HotelImages
      };
      console.log(HotelData);
      setData(HotelData);
      const { reviewsCount, ratingAvg } = getReviewsStats(Reviews);
      setratingAverge(ratingAvg);
      setreviewCount(reviewsCount);
      setLoading(false);

    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHotel();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <h1 className={styles.heading}>{data.Service.name}</h1>
          {
            currentUser === data.Hotel.UserId &&
            <div className={styles.iconsBox}>
              <Link to={`/AddHotel?edit=1`} state={data}>
                <IconEdit />
              </Link>
              <button className={styles.delete} onClick={handleDelete}>
                <IconDelete />
              </button>
            </div>
          }
          <p className={styles.tourInfo}>{data.Service.address + ", " + data.Service.city + ", " + ", " + data.Service.province}</p>
          <p className={styles.tourInfo}>{data.Service.website}</p>
          <p className={styles.tourInfo}>{data.Service.email}</p>
          <p className={styles.tourInfo}>{data.Service.phone}</p>
          <h3 className={styles.headingListing}>Hotel Amenities</h3>
          <p>{data.Hotel.amenities}</p>
          <h3 className={styles.headingListing}>About Hotel</h3>
          <p>{data.Service.description}</p>
        </div>
        <Carousel imageList={data.HotelImages} />
      </div>
      <div>
        <h3 className={styles.subHeading}>Room Types</h3>
        {data.Hotel.Rooms.map((room, index) => {
          return (
            <div className={styles.roomWrapper}>
              <div className={styles.roomContainer} key={index}>
                <h2 className={styles.headingListing}>Room Configuration {index + 1}</h2>
                <div className={styles.roomDetails}>
                  {Object.entries(room).map(([key, value]) => (
                    key !== "roomAmenities" && key !== 'HotelId' && key !== 'id' ? (
                      <div className={styles.detailItem} key={key}>
                        <span className={styles.detailLabel}>{key}:</span>
                        <span className={styles.detailValue}>{value}</span>
                      </div>
                    ) : null
                  ))}
                </div>
                <div>
                <h2 className={styles.headingListing}>Room Ameneties</h2>
                  {room.roomAmenities}
                </div>
              </div>
              <HotelBooking imgSrc={data.HotelImages[0].imageUrl} hotelName={data.Service.name} hotelId = {room["HotelId"]} roomId={room["id"]} price= {room["rentPerNight"]} />
            </div>
          );
        })}

      </div>
      <div>
        <div className={styles.reviewsContainer}>
          <div className={styles.testimonial}>
            <h2 className={styles.subHeading}>People's Opinion</h2>
            <Testimonial />
          </div>
          <div className={styles.rating}>
            <Rating rating={ratingAverge} />
            <p className={styles.ratingText}>Based on {reviewCount} Reviews</p>

            <div className={styles.btn}>
              <Button value="Book Room Now" btnType="submit" />
            </div>
          </div>
        </div>
      </div>
      <ReviewForm />
    </div>
  );
}
