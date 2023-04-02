import React, { useState } from 'react';
import styles from './CommentSection.module.css';
import CommentForm from '../../components/CommentForm/CommentForm';

const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newCommentData = {
      id: comments.length + 1,
      comment: newComment,
      author: 'Mr. Tourist',
      date: new Date().toISOString().slice(0, 10)
    };
    comments.push(newCommentData);
    setNewComment('');
  };

  return (
    <div className={styles.container}>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <div>No comments yet.</div>
      ) : (
        comments.map(comment => (
          <div key={comment.id} className={styles.comment}>
            <div> <span className={styles.commentAuthor}>{comment.author}</span> <span className={styles.commentDate}> &#8226; {comment.date}</span>
            </div>
            <div>{comment.comment}</div>
          </div>
        ))
      )}
      <CommentForm
        newComment={newComment}
        setNewComment={setNewComment}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CommentSection;