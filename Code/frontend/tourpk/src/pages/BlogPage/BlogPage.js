import React from 'react';
import styles from './BlogPage.module.css';
import { blogPosts } from "../../FakeData.js";
import { commentData } from "../../FakeData.js";
import { BlogPost, CommentSection } from '../../components/index'
import axios from 'axios';

const BlogPage = () => {
  const blogId = 1; // Change this to display a different blog post
  const blogPost = blogPosts.find(post => post.id === blogId);
  const comments = commentData.filter(comment => comment.blogId === blogId);

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