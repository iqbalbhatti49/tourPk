import React from 'react';
import styles from './BlogPost.module.css';

const BlogPost = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{post.title}</div>
            <p className={styles.info}> Posted by {post.postedBy} on {post.datePosted}
            </p>
            <div className={styles.content}>{post.content}</div>
        </div>
    );
};

export default BlogPost;