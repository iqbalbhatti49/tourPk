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
    // fetch comments from database
    const result = await dispatch(fetchCommentByBlog(blogId));
    console.log("-----------------comment yeeeeeeee: ", result.payload);
    setComments(result.payload);
  }
  const addComments = async (comment) => {
    // console.log("gonna add this cmnt -----------", comment);
    const addedComment = await dispatch(addComment(comment));
    // console.log("--------------added comment: --", addedComment);
    setComments(addedComment.payload, ...comments);
    setNewComment('');
    setisNewComment(!isNewComment); // to re-render the component and show the new comment
  }

  useEffect(
    () => {
      fetchComments();
    }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      commentText: newComment,
      blogPostId: blogId,
      userId: userId
    }
    addComments(comment);
  };

  // return (
  //   <div className={styles.container}>
  //     <h2>Comments</h2>
  //     {comments.length === 0 ? (
  //       <div>No comments yet.</div>
  //     ) : (
  //       comments.map(comment => (
  //         <div key={comment.id} className={styles.comment}>
  //           <div> <span className={styles.commentAuthor}>{comment.author}</span> <span className={styles.commentDate}> &#8226; {comment.date}</span>
  //           </div>
  //           <div>{comment.comment}</div>
  //         </div>
  //       ))
  //     )}
  //     <CommentForm
  //       newComment={newComment}
  //       setNewComment={setNewComment}
  //       handleSubmit={handleSubmit}
  //     />
  //   </div>
  // );


  return (
    <div className={styles.container}>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className={styles.comment}>
          <div> <span className={styles.commentAuthor}>{comment.userId}</span> <span className={styles.commentDate}> &#8226; {comment.datePosted}</span>
          </div>
          <div>{comment.commentText}</div>
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