import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import styles from "./AddBlog.module.css";
import "react-quill/dist/quill.snow.css";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import { categories } from "../../utils/blogsCategories";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../app/features/blogs/blogsSlice";

const AddBlog = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState("");

    const blogCategories = useSelector((state) => state.blogs.blogCategories);
    const categoriesList = [
        "Hotels & Resorts", "Restaurants & Cafes", "Tour Guides", "Mesmerizing Sight Seeing Places", "Must Visit Place in 2023", "Other Blogs of Interest"
    ];
    const dispatch = useDispatch();
    const handleClick = () => {
        console.log(blogCategories);
        const blog = {
            //use unique id --> uuid
            //id: Math.floor(Math.random() * 1000), can skip
            title: title,
            postText: value,
            category,
            datePosted: "2022-04-10",
            username: "Jane Smith",
            userId: 1
        };
        dispatch(addBlog(blog));
        console.log(blogCategories);
    }
    /*
     const [formValues, setFormValues] = useState({}); // add state to store form values
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormValues({
            title,
            postText: value,
            category,
        });
        try {
            // console.log("Form vals----- ", formValues);
            const res = await axios.post("/blog/addBlog", formValues);
            // console.log("id fronted addblog: ", res);
            navigate(`/Blog/${res.data}`);
        }
        catch (err) {
            alert(err.message);
        }

    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    */

    return (
        <div className={styles.container}>
            <form className={styles.content} onSubmit={handleSubmit}>
                <input
                    className={styles.title}
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className={styles.editorContainer}>
                    <ReactQuill
                        className={styles.editor}
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <div className={styles.publish}>
                    <input
                        type="file"
                        className={styles.blogImg}
                        name="blogImg"
                        onChange={handleFileChange}
                    />
                    <button className={styles.buttonPrimary} type="submit">
                        Publish
                    </button>
                </div>
            </form>
            <div className={styles.menu}>
                <div className={styles.item}>
                    <h1>Select Category</h1>
                    {categories.map((cat, index) => {
                        return (
                            <CategoryContainer
                                onChange={(e) => setCategory(e.target.value)}
                                catName={cat.name}
                                category={category}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AddBlog;