import React, { useState, useEffect } from 'react';
import styles from './BlogMenu.module.css';
import axios from 'axios';
import { BlogCard } from '../BlogCard/BlogCard';

export default function BlogMenu({ id }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/blog/randomBlogs/:${id}`);
                console.log(res);
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