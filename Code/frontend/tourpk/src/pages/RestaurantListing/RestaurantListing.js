import styles from './RestaurantListing.module.css'
import {
    React, useEffect, useLocation, Carousel, Testimonial, Rating, useNavigate, getReviewsStats,
    useSelector, IconEdit, IconDelete, useState, useParams, axiosInstance, ReviewForm
}
from '../../components';

export default function RestaurantListing() {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.id);
    const role = useSelector((state) => state.user.role);
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [reviews, setreviews] = useState(null);
    const [reviewCount, setreviewCount] = useState(null);
    const [ratingAverge, setratingAverge] = useState(null);
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
                const ids = {
                    ServiceId: data.Service.id,
                    RestaurantId: data.Restaurant.id
                };
                axiosInstance.post(`/restaurant/deleteRestaurant/`, ids);
                navigate("/");
            }
        });
    }
    const handleUpdate = () => {
        const state = {
            data, serviceType: "Restaurant"
        }
        navigate("/AddService?edit=1", { state: state });
    }
    const getRestaurant = async () => {
        try {
            const response = await axiosInstance.get(`/restaurant/getRestaurantById/${id}`);
            const { Service: { Reviews, ...serviceData }, RestaurantImages, ...restData } = response.data;
            setreviews(Reviews);
            const Restaurant = restData;
            const Service = serviceData;
            const restaurantData = {
                Service,
                Restaurant,
                RestaurantImages
            };
            let { reviewsCount, ratingAvg } = getReviewsStats(Reviews);
            setData(restaurantData);
            setratingAverge(ratingAvg);
            setreviewCount(reviewsCount);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };
    useEffect(() => {
        getRestaurant();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.information}>
                    <div className={styles.headingContainer}>
                        <h1 className={styles.heading}>{data.Service.name}</h1>
                        <div className={styles.iconsDelEdit}>
                            {
                                currentUser === data.Restaurant.UserId &&
                                <div className={styles.iconsBox}>
                                    <button className={styles.delete} onClick={handleUpdate}>
                                        <IconEdit />
                                    </button>
                                    <button className={styles.delete} onClick={handleDelete}>
                                        <IconDelete />
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={styles.attributesContainer}>
                        {Object.entries(data.Restaurant).map(([key, value]) => (
                            key !== 'ServiceId' && key !== 'id' && key !== 'UserId' ? (
                                <div className={styles.attributes} key={key}>
                                    <p className={styles.key}>{key}</p>
                                    <p>{value}</p>
                                </div>
                            ) : null
                        ))}
                        <div className={styles.attributes}>
                            <p className={styles.key}>Website </p>
                            <p>{data.Service.website}</p>
                        </div>
                    </div>
                </div>
                <Carousel imageList={data.RestaurantImages} />
            </div>
            <div className={styles.details}>
                <div className={styles.about}>
                    <div>
                        <h2 className={styles.subHeading}>Restaurant Description</h2>
                        <p className={styles.description}>
                            {data.Service.description}
                        </p>
                    </div>
                    <div>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.subHeading}>{data.Service.name}</h2>
                            <div className={styles.attributesContainer}>
                                {Object.entries(data.Service).map(([key, value]) => (
                                    key !== 'id' && key !== 'name' && key !== 'description' && key !== 'website' ? (
                                        <div className={styles.attributes} key={key}>
                                            <p className={styles.key}>{key}</p>
                                            <p>{value}</p>
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>

                        <h2 className={styles.subHeading}>People's Opinion</h2>
                        <Testimonial data={reviews} />
                    </div>
                </div>
                <div>
                    {
                        reviewCount != 0 ? (
                            <div>
                                <Rating rating={ratingAverge} />
                                <p className={styles.ratingText}>Based on {reviewCount} Reviews</p>
                            </div>) :
                            <div>
                                <h2 className={styles.subHeading}>Reviews</h2>
                                <p>No reviews yet</p></div>
                    }
                </div>
            </div>
            {role == "tourist" && <ReviewForm serviceId={data.Service.id} setReview={setreviews} />}
        </div>
    );
}