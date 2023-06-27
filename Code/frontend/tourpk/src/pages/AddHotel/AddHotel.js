import styles from "./AddHotel.module.css";
import { amenities, React, FormField, Button, useLocation, useNavigate, FinalForm, useSelector }
    from "../../components/index";

const AddHotel = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const role = useSelector((state) => state.user.role);

    // Logic for Update hotel 
    const searchParams = new URLSearchParams(location.search);
    const isEditMode = searchParams.get('edit') === '1';
    let values, hotel;
    let updateInitialValue;
    if (isEditMode) {
        values = location.state.values;
        hotel = location.state.obj;

        // convert amenities string to object for form initial values
        const formatToFieldNames = (obj) => {
            const convertOptionsToValues = (options, features) => {
                return options.reduce((values, option) => {
                    values[option] = features.includes(option);
                    return values;
                }, {});
            };
            const mealTypeValues = convertOptionsToValues(amenities.map(option => option.label), obj.amenities.split(', '));
            const obj1 = {
                ServiceId: obj.ServiceId,
                UserId: obj.UserId,
                ...mealTypeValues,
                id: obj.id
            };
            return obj1;
        };

        updateInitialValue = formatToFieldNames(hotel);
    }

    const preProcess = (values) => {
        // convert selected checkbox values to comma-separated string
        const hotelAmenities = amenities
            .filter(option => values[option.name])
            .map(option => option.label)
            .join(", ");

        const hotelData = {
            service: location.state.values,
            hotelAmenities: hotelAmenities
        };
        return hotelData;
    };

    const onSubmit = (values) => {
        const hotelData = preProcess(values);
        const hotel = {
            id: location.state.obj.id,
            amenities: hotelData.hotelAmenities,
            ServiceId: location.state.obj.ServiceId,
            UserId: location.state.obj.UserId,
        }
        const data = {
            hotel: hotel,
            service: hotelData.service,
            room: location.state.obj.Rooms
        }
        if (isEditMode)
            navigate("/addHotelRoom?edit=1", { state: { data } });
        else
            navigate("/addHotelRoom", { state: { hotelData } });
    }

    return (
        <>
            {
                role === "seller" ? (
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h1 className={styles.heading}>So, You Are A Hotel Owner?</h1>
                            <p className={styles.subHeading}>Offer your services through TourPK</p>
                            <p className={styles.description}>If you can't find the answers to the questions you are looking for, please contact us through the form
                                provided below! If you can't find the answers to the questions you are looking for, please contact us through the form
                                provided below!</p>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.formFields}>
                                <FinalForm onSubmit={onSubmit}>
                                    {({ handleSubmit, values }) => (
                                        <form onSubmit={handleSubmit} className={styles.formContainer}>
                                            <h2 className={styles.subHeading}>Ameneties You Offer</h2>
                                            <div className={styles.hotelAmeneties}>
                                                {
                                                    amenities.map((amenity) => (
                                                        <div>
                                                            <FormField
                                                                key={amenity.name}
                                                                name={amenity.name}
                                                                label={amenity.label}
                                                                type="checkbox"
                                                                theme="light"
                                                                value={values}
                                                                defaultValue={isEditMode ? updateInitialValue[amenity.label] : ""}
                                                                renderIcon={() => null}
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className={styles.btnDiv}>
                                                <Button
                                                    id={styles.signupBtn}
                                                    value="Submit"
                                                    type="submit"
                                                    btnType="submit"
                                                    width={250}
                                                />
                                            </div>
                                        </form>
                                                             )}
                                </FinalForm>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src="../static/images/hotelDetails.png" alt="FAQs" />
                            </div>
                        </div>
                    </div>
                ) :
                    (<img src="../static/images/404.png" alt="" />)
            }
        </>
    );
};

export default AddHotel;
