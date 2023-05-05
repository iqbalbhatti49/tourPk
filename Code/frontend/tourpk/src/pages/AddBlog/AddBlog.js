import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./AddBlog.module.css";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog } from "../../app/features/blogs/blogsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AddBlog = () => {
    let { state } = useLocation();
    const [value, setValue] = useState(state?.postText || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState(state?.category || "");

    const blogCategories = useSelector((state) => state.blogs.blogCategories);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("---------update state -----", state);

    const upload = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };
    const addOrUpdate = async (blog) => {
        const resultAction = await dispatch(state ? updateBlog({ ...blog, id: state.id }) : addBlog(blog));
        console.log("-----------result----", resultAction);
        const addedBlogId = resultAction.payload;
        navigate(`/Blog/${addedBlogId}`);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        const imgUrl = state.image ? state.image : upload(event);
        console.log("----------------img url: ---------", imgUrl);
        // const img = state?.image || imgUrl;
        const blog = {
            title: title,
            postText: value,
            category,
            image: file ? imgUrl : "",
            userId: 1
        };
        addOrUpdate(blog);
    }
    return (
        <div className={styles.container}>
            <form className={styles.content} onSubmit={handleSubmit} encType="multipart/form-data">
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
                        name="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button className={styles.buttonPrimary} type="submit">
                        Publish
                    </button>
                </div>
            </form>
            <div className={styles.menu}>
                <div className={styles.item}>
                    <h1>Select Category</h1>
                    {blogCategories.map((cat, index) => {
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