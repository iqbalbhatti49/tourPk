import React, { useEffect, useState } from 'react';
import styles from './BlogPage.module.css';
import { BlogPost, CommentSection } from '../../components/index'
import { blogPosts, commentData } from "../../utils/FakeData.js";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPage = () => {
  // const blogId = 1; // Change this to display a different blog post
  // const blogPost = blogPosts.find(post => post.id === blogId);
  const { id } = useParams();
  const comments = commentData.filter(comment => comment.blogId === id);
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("id length ", id.length);
        // console.log("id fe: --- ", id);
        const res = await axios.get(`/blog/${id}`);
        // console.log("-----------------inside fetch data-----------------");
        // console.log(res);
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
        <BlogPost post={blogPost} />
        <CommentSection comments={comments} />
      </div>
    </>
  );
};

export default BlogPage;