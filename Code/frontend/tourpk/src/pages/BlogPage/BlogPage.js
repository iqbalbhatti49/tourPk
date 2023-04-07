import React from 'react';
import styles from './BlogPage.module.css';
import { blogPosts } from "../../FakeData.js";
import { commentData } from "../../FakeData.js";
import { NavBar } from '../../components/NavBar/NavBar'
import BlogPost from '../../components/BlogPost/BlogPost';
import CommentSection from '../../components/CommentSection/CommentSection';
import { Footer } from '../../components/Footer/Footer';

const BlogPage = () => {
  const blogId = 1; // Change this to display a different blog post
  const blogPost = blogPosts.find(post => post.id === blogId);
  const comments = commentData.filter(comment => comment.blogId === blogId);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <BlogPost post={blogPost} />
        <CommentSection comments={comments} />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;