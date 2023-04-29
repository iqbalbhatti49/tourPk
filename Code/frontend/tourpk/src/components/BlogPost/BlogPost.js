import React from 'react';
import styles from './BlogPost.module.css';
import { IconEdit, IconDelete } from "../../components/index";
import IconAvatar from '../IconAvatar/IconAvatar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const BlogPost = (props) => {
    const { post } = props;
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`/blog/${post.id}`);
            navigate("/allBlogs");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.img} src="https://venturephotography.com.au/wp-content/uploads/2019/05/DSCF4247.jpg" alt="" />
            <div className={styles.user}>
                <IconAvatar />
                {/* <p className={styles.info}> {post.username}</p> */}
                <p className={styles.info}> Mano Billi </p>
                <div className={styles.iconsDelEdit}>
                    <Link to={`/write?edit=2`} state={post}>
                        <IconEdit />
                    </Link>
                    <button className={styles.delete} onClick={handleDelete}>
                        <IconDelete />
                    </button>
                </div>
            </div>
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: post.title }} />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.postText }} />
            <p className={styles.info}> {post.datePosted}</p>
        </div>
    );
};

export default BlogPost;
