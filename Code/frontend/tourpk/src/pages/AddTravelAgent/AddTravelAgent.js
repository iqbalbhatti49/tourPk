import styles from './AddTravelAgent.module.css';
import {
    useState, itenerary, required, useNavigate, FormField,
    React, Button, useSelector, FinalForm, useLocation, axiosInstance, IconAdd
} from "../../components/index";
import swal from 'sweetalert';

const AddTravelAgent = () => {
    const userId = useSelector(state => state.user.id);
    const role = useSelector((state) => state.user.role);

    const navigate = useNavigate();
    const location = useLocation();
    const [sections, setSections] = useState([1]);
    const addSection = (e) => {
        e.preventDefault()
        setSections([...sections, sections.length + 1]);
    };

    //Update Tour guide logic
    const searchParams = new URLSearchParams(location.search);
    const isEditMode = searchParams.get('edit') === '1';
    let values, travelAgent;
    let updateInitialValue;
    if (isEditMode) {
        values = location.state.values;
        travelAgent = location.state.obj;
    }

    if (isEditMode) {
        //convert itenerary string to object for form initial values
        updateInitialValue = { ...travelAgent };

        const itenerary = travelAgent.itenerary.trim();
        const daySections = itenerary.split("Day ");
        // let maxDays = 1;
        const days = daySections
            .filter((section) => section !== "")
            .map((section) => {
                const [dayNumber, dayContent] = section.split(": ");
                const dayKey = `day${dayNumber}`;
                // ++maxDays;
                return { [dayKey]: dayContent };
            });

        days.forEach((day) => {
            const dayKey = Object.keys(day)[0];
            updateInitialValue[dayKey] = day[dayKey];
        });

        delete updateInitialValue.itenerary;
    }

    const addInitialValue = {
        source: "",
        destination: "",
        daysCount: null,
        packagePrice: null,
        PerdayPrice: null,
        hotelDetails: "",
        foodDetails: "",
        transportDetails: "",
        exclude: "",
        itenerary: "",
        ServiceId: null,
        UserId: null
    };

    const initialValue = isEditMode ? updateInitialValue : addInitialValue;

    const onSubmit = async (value) => {
        value.UserId = userId;
        const servic = isEditMode ? values : location.state.values;
        if (isEditMode)
            servic.serviceId = travelAgent.id;
        const travelAgentData = {
            service: servic,
            travelAgent: value
        };

        //convert itenerary object to string for database
        let itenerary = "";
        for (let i = 0; i < sections.length; i++) {
            let j = i + 1;
            let day = "Day " + j + ": " + value['day' + j] + ", ";
            itenerary += day;
        }
        value.itenerary = itenerary;
        value.UserId = userId;
        for (let i = 1; i <= sections.length; i++) {
            delete value[`day${i}`];
        }

        let travelAgentObj;
        if (!isEditMode) {
            travelAgentObj = await axiosInstance.post("/travelAgent/addTravelAgentPackage", travelAgentData);
            swal("Tour Package Added Successfully", "Success! The new Tour Package entry has been added successfully.", "success");
        }
        else {
            travelAgentObj = await axiosInstance.post("/travelAgent/updateTravelAgentPackage", travelAgentData);
            swal("Tour Package Service Updated Successfully", "Success! Changes has been updated successfully.", "success");
        }

        const travelAgentAdded = travelAgentObj.data;
        navigate(`/travelAgentListing/${travelAgentAdded}`, { travelAgentAdded });
    };

    return (
        <>
            {
                role === "seller" ? (
                    <div id={styles.travelAgentContainer}>
                        <div className={styles.formContainer}>
                            <FinalForm
                                // initialValues={initialValues}
                                onSubmit={onSubmit}
                                subscription={{
                                    submitted: true
                                }} >
                                {({ handleSubmit, submitting, values }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.formBody}>
                                            <h1>Add Tour Package Details</h1>
                                            <div className={styles.basicInfo}>
                                                <FormField name="source" label="Tour Starting Point" type="text" placeholder="eg. Lahore" validate={required} theme="light" value={values} defaultValue={initialValue.source} renderIcon={() => null} />
                                                <FormField name="destination" label="Destination" type="text" placeholder="eg. Hunza Valley" validate={required} theme="light" value={values} defaultValue={initialValue.destination} renderIcon={() => null} />
                                                <FormField name="daysCount" label="No. of days of tour" type="text" placeholder="eg. 12 days" validate={required} theme="light" value={values} defaultValue={initialValue.daysCount} renderIcon={() => null} />
                                                <FormField name="packagePrice" label="Base Price (Rs.)" type="number" placeholder="Price without extra services(eg. Rs 5000)" validate={required} theme="light" value={values} defaultValue={initialValue.packagePrice} renderIcon={() => null} />
                                                <FormField name="hotelDetails" label="Hotel details (if any)" type="text" placeholder="3 days in PC Hnza, 2 days in Serena Karachi..." theme="light" value={values} defaultValue={initialValue.hotelDetails} renderIcon={() => null} />
                                                <FormField name="foodDetails" label="Food details (if any)" type="text" placeholder="eg. Lunch included, at same hotel/ xyz travelAgent..." theme="light" value={values} defaultValue={initialValue.foodDetails} renderIcon={() => null} />
                                                <FormField name="transportDetails" label="Transport details (if any)" type="text" placeholder="eg. Departure from xyz Lahore Airport, back from Gilgit Airport..." theme="light" value={values} defaultValue={initialValue.transportDetails} renderIcon={() => null} />
                                                <FormField name="exclude" label="What's Excluded from package?" type="text" placeholder="eg. Return air ticket, dinner , Personal Expense..." theme="light" value={values} defaultValue={initialValue.exclude} renderIcon={() => null} />
                                                <div className={styles.itenerary} >
                                                    <h3 className={styles.title}>Itenerary (tour plan details per day)</h3>
                                                    <a href="#" onClick={addSection} id={styles.addIcon} > <IconAdd /> </a>
                                                </div>
                                                <div className={styles.form}>
                                                    {sections.map((section, index) => {
                                                        const i = index + 1;
                                                        return (
                                                            <>
                                                                <FormField name={"day" + i} label={"Day " + i} type="text" validate={required} placeholder={itenerary[index]} theme="light" value={values} defaultValue={isEditMode ? updateInitialValue["day" + i] : ""} renderIcon={() => null} />
                                                            </>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                        </div>
                                        <Button value="Add TourPackage" type="submit" btnType="submit" />
                                    </form>
                                )}
                            </FinalForm>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="https://cdn.pixabay.com/photo/2018/12/15/19/36/fashion-3877510_1280.jpg" alt="" />
                        </div>
                    </div >) :
                    (<img src="../static/images/404.png" alt="" />)
            }
        </>
    );
};
export default AddTravelAgent;