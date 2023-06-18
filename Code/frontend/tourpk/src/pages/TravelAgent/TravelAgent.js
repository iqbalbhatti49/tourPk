import styles from './TravelAgent.module.css'
import { FormField, Button, mealOptions, featureOptions, required, validateURL,
         FinalForm, React } from "../../components/index";

const TravelAgent = () => {

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div id={styles.restaurantContainer}>
            <div className={styles.formContainer}>
                <FinalForm
                    onSubmit={onSubmit}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formBody}>
                                <h1>Add Your Restaurant Details</h1>
                                <h3 className={styles.title}>Basic Information</h3>
                                <div className={styles.basicInfo}>
                                    <FormField name="startTime" label="Opening Time" type="text" placeholder="eg. 9:00 am" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="endTime" label="Closing Time" type="text" placeholder="eg. 12:00 pm" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="menu" label="Menu URL (if any)" type="text" placeholder="https:/resturant.com/menu.png" validate={validateURL} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="minPrice" label="Starting price" type="text" placeholder=" Starting price in your menu (eg. Rs 500)" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="cuisine" label="Cuisines" type="text" placeholder="Cuisines you offer (eg. French, Italian, Japanese)" validate={required} theme="light" value={values} renderIcon={() => null} />
                                </div>
                                <div >
                                    <h3 className={styles.title}>Meals You Offer</h3>
                                    <div className={styles.meals}>
                                        {
                                            mealOptions.map(option => (
                                                <FormField key={option.name} name={option.name} label={option.label} type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            ))}
                                    </div>
                                </div>
                                <div >
                                    <h3 className={styles.title}>What features does this restaurant have ?</h3>
                                    <div className={styles.features}>
                                        {featureOptions.map((feature) => (
                                            <div className={styles.subfeatures} key={feature.subheading}>
                                                <h4 className={styles.subheading}>{feature.subheading}</h4>
                                                {feature.options.map((option) => (
                                                    <FormField key={option} name={option} label={option} type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Button value="Add Restaurant" type="submit" btnType="submit" />
                        </form>
                    )}
                </FinalForm>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://images.pexels.com/photos/3534744/pexels-photo-3534744.jpeg" alt="" />
            </div>
        </div >
    );
};
export default TravelAgent;
