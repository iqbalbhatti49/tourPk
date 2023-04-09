import React from 'react';
import styles from './BlogPage.module.css';
import { blogPosts } from "../../utils/FakeData.js";
import { commentData } from "../../utils/FakeData.js";
import { NavBar, Footer, BlogPost, CommentSection } from '../../components/index'

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
