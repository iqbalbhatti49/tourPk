import React from 'react';
import styles from './BlogPage.module.css';
import { BlogPost, CommentSection } from '../../components/index'
import { commentData } from "../../utils/FakeData.js";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogMenu from '../../components/BlogMenu/BlogMenu';

const BlogPage = () => {
  const { id } = useParams();
  const comments = commentData.filter(comment => comment.blogId === id);
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
          <CommentSection comments={comments} />
        </div>
        <div className={styles.sidebar}>
          <BlogMenu id={blogPost.id} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;