import React from 'react';
import styles from './BlogPost.module.css';

const BlogPost = (props) => {
    const { post } = props;

    return (
        <div className={styles.container}>
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: post.title }} />
            <p className={styles.info}> By {post.username} &#8226; {post.datePosted}
            </p>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.postText }} />
        </div>
    );
};

export default BlogPost;
