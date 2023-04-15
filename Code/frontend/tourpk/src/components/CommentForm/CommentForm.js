import React from 'react';
import styles from './CommentForm.module.css';
import Button from '../Button/Button';


const CommentForm = ({ newComment, setNewComment, handleSubmit }) => {
    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
            />
            <Button value="Comment" type="primary" width="8em" btnType="submit" />
        </form>
    );
};

export default CommentForm;

