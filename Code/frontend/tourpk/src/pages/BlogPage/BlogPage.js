import React, { useEffect, useState } from 'react';
import styles from './BlogPage.module.css';
import { BlogPost, CommentSection } from '../../components/index'
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import BlogMenu from '../../components/BlogMenu/BlogMenu';
import { fetchBlogById } from '../../app/features/blogs/blogsSlice';

const BlogPage = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blog = await dispatch(fetchBlogById(id));
        setBlogPost(blog.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <BlogPost post={blogPost} />
          <CommentSection blogId={id} />
        </div>
        <div className={styles.sidebar}>
          <BlogMenu id={id} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;