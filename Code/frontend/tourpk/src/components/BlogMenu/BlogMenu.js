import React, { useState, useEffect } from 'react';
import styles from './BlogMenu.module.css';
import axios from 'axios';
import { BlogCard } from '../BlogCard/BlogCard';
import axiosInstance from '../../utils/Api';

export default function BlogMenu(props) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const id = props.id;
            try {
                // console.log("----------id in blogmenu: ", id);
                const res = await axiosInstance.get(`/blog/randomBlogs/${id}`);
                // console.log(res);
                setBlogs(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [])

    return (
        <div className={styles.menu}>
            {/*
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <img className={styles.blogImg} src={`../upload/${post?.img}`} alt="" />
                    <h2>{post.title}</h2>
                </div>
            ))} */}
            <h2>Other posts you may like</h2>
            {blogs.map((blog, index) => (
                <BlogCard
                    blog={blog}
                    key={blog.id}
                    usage="menu"
                />
            ))}
            {/* <button>Read More</button> */}

        </div>
    )
}