import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import styles from './BlogCard.module.css';
import { Link } from 'react-router-dom';

export const BlogCard = (props) => {
   const { blog } = props;
   const extractPlainText = (html, length) => {
      let postText = document.createElement('div');
      postText.innerHTML = html;
      let text = postText.textContent;
      return text.slice(0, length);
   };

   // TODO : Add username --- JOIN blog ON blog.userId = user.id....
   // TODO: do above on loc 27

   return (
      <Link to={`/Blog/${blog.id}`} className={styles.card}>
         <Card>
            <ImageHeader imageSrc="https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2022/05/Best-Natural-Places-to-Visit-in-Pakistan.jpg" />
            <CardBody>
               <div className={styles.body}>
                  <div className={styles.imageTitle}>{blog.title}</div>
                  <p className={styles.postText}>{extractPlainText(blog.postText, 90)} ..... </p>
                  <p className={styles.username}>By John doe</p>
               </div>
            </CardBody>
         </Card >
      </Link >
   );
};