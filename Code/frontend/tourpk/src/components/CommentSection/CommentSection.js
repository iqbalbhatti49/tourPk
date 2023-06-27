import React, { useEffect, useState } from 'react';
import styles from './CommentSection.module.css';
import CommentForm from '../../components/CommentForm/CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchCommentByBlog } from '../../app/features/comment/commentsSlice';

const CommentSection = ({ blogId }) => {
  const userId = useSelector((state) => state.user.id);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isNewComment, setisNewComment] = useState(false);
  const dispatch = useDispatch();

  const fetchComments = async () => {
    const result = await dispatch(fetchCommentByBlog(blogId));
    setComments(result.payload);
  }
  const addComments = async (comment) => {
    const addedComment = await dispatch(addComment(comment));
    setComments(prevState => [...prevState, addedComment.payload]);
    setNewComment('');
    setisNewComment(!isNewComment); // to re-render the component and show the new comment
  }

  useEffect(
    () => {
      fetchComments();
    }, [blogId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      commentText: newComment,
      BlogPostId: blogId,
      UserId: userId
    }
    addComments(comment);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.subHeading}>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className={styles.comment}>
          <div> <span className={styles.commentAuthor}>{comment.User ? comment.User.name : "you"}</span> <span className={styles.commentDate}> &#8226; {comment.datePosted}</span>
          </div>
          <div className={styles.commentText}>{comment.commentText}</div>
        </div>
      ))
      }
      <CommentForm
        newComment={newComment}
        setNewComment={setNewComment}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CommentSection;