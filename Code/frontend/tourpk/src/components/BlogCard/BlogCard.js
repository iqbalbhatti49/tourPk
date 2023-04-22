import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import styles from './BlogCard.module.css';

export const BlogCard = (props) => {
   const { blog } = props;
   return (
      <a href="/Blog/:id" className={styles.card}>
         <Card>
            <ImageHeader imageSrc="https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2022/05/Best-Natural-Places-to-Visit-in-Pakistan.jpg" />
            <CardBody>
               <div className={styles.body}>
                  <div className={styles.imageTitle}>{blog.title}</div>
                  <div className={styles.postText}>
                     {blog.postText.substr(0, 90)}...
                  </div>
               </div>
            </CardBody>
         </Card>
      </a>
   );
};