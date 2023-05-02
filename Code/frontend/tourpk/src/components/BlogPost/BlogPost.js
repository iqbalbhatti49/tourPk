import React, { useEffect } from 'react';
import styles from './BlogPost.module.css';
import { IconEdit, IconDelete, IconAvatar } from "../../components/index";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../app/features/blogs/blogsSlice';

const BlogPost = (props) => {
    const { post } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteBlog(post.id));
        navigate("/allBlogs");
    }
    useEffect(() => {
        console.log("-------------post: ", post);
    }, [post]);

    return (
        <div className={styles.container}>
            <img className={styles.img} src={`../../public/upload/${post.image}`} alt="" />
            <div className={styles.user}>
                <IconAvatar />
                {/* <p className={styles.info}> {post.username}</p> */}
                <p className={styles.info}> Mano Billi </p>
                <div className={styles.iconsDelEdit}>
                    <Link to={`/AddBlog?edit=1`} state={post}> {/* set a stateful value for the new location */}
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