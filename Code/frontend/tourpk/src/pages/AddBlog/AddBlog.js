import React, { useState } from "react";
import ReactQuill from "react-quill";
import styles from "./AddBlog.module.css";
import "react-quill/dist/quill.snow.css";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../app/features/blogs/blogsSlice";

const AddBlog = () => {
    const [value, setValue] = useState('');
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

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <input className={styles.title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <div className={styles.editorContainer}>
                    <ReactQuill className={styles.editor} theme="snow" value={value} onChange={setValue} />
                </div>
                <div className={styles.publish}>
                    <input type="file" className={styles.blogImg} name="blogImg" onChange={(e) => setFile(e.target.files[0])} />
                    <button className={styles.buttonPrimary} onClick={handleClick}>Publish</button>
                </div>
            </div>
            <div className={styles.menu}>
                <div className={styles.item}>
                    <h1>Select Category</h1>
                    {categoriesList.map((cat, index) => {
                        return <CategoryContainer onChange={(e) => setCategory(e.target.value)} catName={cat} category={category} key={index} />
                    })}
                </div>
            </div>
        </div >
    );
};

export default AddBlog;
