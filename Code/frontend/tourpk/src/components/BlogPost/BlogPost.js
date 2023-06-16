import React, { useEffect } from 'react';
import styles from './BlogPost.module.css';
import { IconEdit, IconDelete, IconAvatar } from "../../components/index";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../../app/features/blogs/blogsSlice';
import swal from 'sweetalert';

const BlogPost = ({ post }) => {
    const currentUser = useSelector(state => state.user.id);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = () => {
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this blog!',
            icon: 'warning',
            buttons: ['Cancel', 'Confirm'],
            dangerMode: true,
        }).then((clickedBtn) => {
            if (clickedBtn) {
                console.log('User clicked on confirm');
                dispatch(deleteBlog(post.id));
                navigate("/allBlogs");

            } else {
                console.log('User clicked on "Cancel"');
            }
        });
    }

    useEffect(() => {
    }, [post]);

    return (
        <div className={styles.container}>
            <img className={styles.img} src={post.image ? post.image : ""} alt="" />
            <div className={styles.user}>
                <IconAvatar />
                <p className={styles.info}> {post.User && post.User.name} </p>
                <div className={styles.iconsDelEdit}>
                    {
                        currentUser === post.UserId &&
                        <>
                            <Link to={`/AddBlog?edit=1`} state={post}> {/* set a stateful value for the new location */}
                                <IconEdit />
                            </Link>
                            <button className={styles.delete} onClick={handleDelete}>
                                <IconDelete />
                            </button>
                        </>
                    }
                </div>
            </div>
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: post.title }} />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.postText }} />
            <p className={styles.info}> {post.datePosted}</p>
        </div>
    );
};

export default BlogPost;