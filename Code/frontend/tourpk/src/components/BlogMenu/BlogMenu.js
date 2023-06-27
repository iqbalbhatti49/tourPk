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
                const res = await axiosInstance.get(`/blog/randomBlogs/${id}`);
                setBlogs(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [props.id])

    return (
        <div className={styles.menu}>
            <h2 className={styles.subHeading}>Other posts you may like</h2>
            {blogs.map((blog, index) => (
                <BlogCard
                    blog={blog}
                    key={blog.id}
                    usage="menu"
                />
            ))}
        </div>
    )
}