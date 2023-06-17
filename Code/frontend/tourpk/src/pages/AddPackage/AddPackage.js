import styles from './AddPackage.module.css';
import { 
    ServiceSection, PackageInformation, IconAdd, addPackage, validateAlpha,
    React, Button, useState, FinalForm , useDispatch } 
from "../../components/index";

export default function AddPackage() {
    const dispatch = useDispatch();

    const [sections, setSections] = useState([1, 2]);
    const addSection = (e) => {
        e.preventDefault()
        setSections([...sections, sections.length + 1]);
    };

    const onSubmit = (values, form) => {
        const services = [];
        for (let i = 0; i < sections.length; i++) {
            const serviceTitle = values[`serviceTitle${i}`];
            const serviceDescription = values[`serviceDescription${i}`];
            if (serviceTitle && serviceDescription) {
                services.push({
                    id: i + 1,
                    title: serviceTitle,
                    description: serviceDescription,
                });
            }
        }

        // Format the data before dispatching to the store
        const formattedValues = {
            PackageName: values['PackageName'],
            Price: values['Price'],
            Description: values['Description'],
            Validity: values['Validity'],
            services: services,
        };

        dispatch(addPackage(formattedValues)); // add package to state
        form.reset();
        Object.keys(values).forEach(key => {
            form.change(key, undefined);
            form.resetFieldState(key);
        });
    
    };


    return (
        <>
            <div className={styles.container}>
                <h1>Add Services Package</h1>
                <div>
                    <img src="../static/images/packagehead.png" alt="packages" />
                </div>
                <div className={styles.formBorder}>
                    <div className={styles.formContainer}>
                        <FinalForm onSubmit={onSubmit} subscription={{ submitted: true }} >
                            {({ handleSubmit, submitting, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <PackageInformation values={values} />
                                    <div className={styles.headingContainer}>
                                        <h2 id={styles.heading2}>What's included</h2>
                                        <a href="#" onClick={addSection}> <IconAdd /> </a>
                                    </div>
                                    <div className={styles.form}>
                                        {sections.map((section, index) => {
                                            const showRemove = index < 2 ? 0 : 1;
                                            return (
                                                <ServiceSection key={index} index={index} validate={validateAlpha} showRemove={showRemove} sections={sections} setSections={setSections} />
                                            );
                                        })}
                                        <div className={styles.addButtonContainer}>
                                            <Button value="Add Package" type="submit" btnType="submit" />
                                        </div>
                                    </div>
                                </form>
                            )}
                        </FinalForm>
                    </div>
                </div>
            </div>
        </>
    )
}
