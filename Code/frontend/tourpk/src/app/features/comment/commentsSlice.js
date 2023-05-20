import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [
        {
            commentText: '',
            datePosted: '',
            commentPostId: null,
            userId: '',
            userName: ''
        },
        {
            commentText: '',
            datePosted: '',
            commentPostId: null,
            userId: '',
            userName: ''
        }
    ],
    status: 'idle',
    error: null
};

export const fetchCommentByBlog = createAsyncThunk('comment/fetchCommentByBlog', async (blogPostId) => {
    const response = await axios.get(`/comment/${blogPostId}`);
    // console.log("---response.data of fetch comment--", response.data);
    // console.log("blogId -- comnt SERVER -----********:", blogPostId);
    return response.data;
});

export const addComment = createAsyncThunk('comment/addComment', async (comment) => {
    try {
        console.log("*************--->>>>>*** ", comment);
        const response = await axios.post('/comment/addComment', comment);
        return response.data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
});

export const deleteComment = createAsyncThunk('comment/deleteComment', async (commentId) => {
    const response = await axios.delete(`/comment/${commentId}`);
    return response.data;
});

export const updateComment = createAsyncThunk('comment/updateComment', async (comment) => {
    const response = await axios.put(`/comment/${comment.id}`, comment);
    return response.data;
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCommentByBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log("------comment fetched payload-----", action.payload);
                // state.items = state.items.push(action.payload);
                state.items = state.items.concat(action.payload);
            })
            .addCase(fetchCommentByBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                console.log("---------action payload ----- ", action.payload);
                state.items.push(action.payload);

            })
            .addCase(addComment.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addComment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                const index = state.items.findIndex((comment) => comment.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteComment.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(deleteComment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                const index = state.items.findIndex((comment) => comment.id === action.payload.id);
                state.items[index] = action.payload;
            });
    },
});

export const { } = commentsSlice.actions;
export default commentsSlice.reducer;