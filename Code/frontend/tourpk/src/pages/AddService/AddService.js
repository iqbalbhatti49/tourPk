import React, { useState } from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddService.module.css'
import { FormField, Button } from "../../components/index";
import { required, validatePhone, validateEmail, validateAlpha, validateURL } from '../../utils/validations';
import Dropdown from "../../components/Dropdown/Dropdown";
import { useNavigate } from "react-router";
import axiosInstance from "../../utils/Api";
const AddService = () => {
    const [file, setFile] = useState(null);
    const [service, setService] = useState("");
    const navigate = useNavigate();
    const handleChange = (selectedOption) => {
        setService(selectedOption);
    };

    const upload = async (event) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axiosInstance.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const image =
        service == "Hotel" ? "../static/images/addHotel.png" :
            service == "Tour Guide" ? "../static/images/addTourGuide.png" :
                service == "Travel Agent" ? "../static/images/addTravelAgent.png" : "../static/images/addResturant.png"

    const onSubmit = async (values, event) => {
        const imgUrl = await upload(event);
        values.image = imgUrl;
        const URL = service == "Hotel" ? "addHotel" :
            service == "Tour Guide" ? "addTourGuide" :
                service == "Travel Agent" ? "addTravelAgent" : "addrestaurant"
        //naviagte to corresponding add Service
        navigate(`/${URL}`, {
            state: { values }
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.header}>
                    <h1 className={styles.heading}>Are You A Service Provider?</h1>
                    <p className={styles.subHeading}>Offer your services through TourPK</p>
                    <p className={styles.description}>
                        If you can't find the answers to the questions you are looking for, please contact us through the form
                        provided below! If you can't find the answers to the questions you are looking for, please contact us through the form
                        provided below!
                    </p>
                    <FormFinal onSubmit={onSubmit}>
                        {({ handleSubmit, values }) => (
                            <form onSubmit={handleSubmit} className={styles.serviceType}>
                                <Dropdown
                                    name="serviceType"
                                    label="Service Type"
                                    optionsValues={[
                                        {
                                            "id": 1,
                                            "name": "Hotel",
                                        },
                                        {
                                            "id": 2,
                                            "name": "Restaurant",
                                        },
                                        {
                                            "id": 3,
                                            "name": "Tour Guide",
                                        },
                                        {
                                            "id": 4,
                                            "name": "Travel Agent",
                                        }
                                    ]}
                                    validate={required}
                                    theme="light"
                                    value={service}
                                    placeholder="Choose Service Type"
                                    renderIcon={() => null}
                                    onChange={(selectedOption) => handleChange(selectedOption)}
                                />
                            </form>
                        )}
                    </FormFinal>
                </div>
                <img className={styles.image} alt="Cities" src="../../static/images/serviceProvider.png" />
            </div>
            {service != "" &&
                <div className={styles.content}>
                    <div className={styles.formFields}>
                        <FormFinal
                            onSubmit={onSubmit}
                            subscription={{
                                submitted: true
                            }} >
                            {({ handleSubmit, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <h2 className={styles.subTitle}>About {service}</h2>
                                    <FormField
                                        name="serviceName"
                                        label="Name"
                                        type="text"
                                        placeholder={service == "Hotel" ? "PC Hotel" : service == "Tour Guide" ? "Iqra" : service == "Travel Agent" ? "PK Tours" : "Khaba"}
                                        validate={required}
                                        theme="light" value={values}
                                        renderIcon={() => null}
                                    />
                                    <FormField
                                        name="Description"
                                        label="Description"
                                        type="text"
                                        placeholder="About your service"
                                        validate={required}
                                        theme="light"
                                        value={values}
                                        renderIcon={() => null}
                                    />
                                    <FormField
                                        name="Email"
                                        label="Email"
                                        type="email"
                                        placeholder="abc@email.com"
                                        validate={validateEmail}
                                        theme="light"
                                        value={values}
                                        renderIcon={() => null}
                                    />
                                    <FormField
                                        name="WebsiteURL"
                                        label="Website URL"
                                        type="text"
                                        placeholder="pc.com"
                                        validate={validateURL}
                                        theme="light"
                                        value={values}
                                        renderIcon={() => null}
                                    />
                                    <FormField name="PhoneNumber" label="Phone no." type="text" placeholder="Your Phone Number" validate={validatePhone} theme="light" renderIcon={() => null} />
                                    <h2 className={styles.subTitle}>Location</h2>
                                    <FormField name="City" label="City" type="text" placeholder="Lahore" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="Province" label="State/Province" type="text" placeholder="Punjab" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="Country" label="Country" type="text" placeholder="Pakistan" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="Street" label="Street Address" type="text" placeholder="Street # 1" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <div className={styles.uploadMedia}>
                                        <label htmlFor="media-upload">Add Some Astetic Photos:&emsp;&emsp;</label>
                                        <input
                                            id="media-upload"
                                            type="file"
                                            className={styles.blogImg}
                                            name="file"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            placeholder="Select an image file"
                                        />
                                    </div>
                                    <Button value="Continue" type="submit" btnType="submit" />
                                </form>
                            )}
                        </FormFinal>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={image} alt="FAQs" />
                    </div>
                </div>}

        </div>
    );
};
export default AddService;
