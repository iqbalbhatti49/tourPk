import React, { useEffect, useState } from 'react';
import styles from './BlogPage.module.css';
import { BlogPost, CommentSection } from '../../components/index'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogMenu from '../../components/BlogMenu/BlogMenu';

const BlogPage = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/blog/${id}`);
        setBlogPost(res.data);
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