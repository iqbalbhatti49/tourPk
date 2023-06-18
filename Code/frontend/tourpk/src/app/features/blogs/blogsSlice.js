import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/Api'


const initialState = {
    blogCategories: [
        {
            id: 1,
            name: 'Hotels & Resorts',
            blogs: []
        },
        {
            id: 2,
            name: 'Food & Restaurants',
            blogs: []
        },
        {
            id: 3,
            name: 'Tour Guides',
            blogs: []
        },
        {
            id: 4,
            name: 'Mesmerizing Sight Seeing Places',
            blogs: []
        },
        {
            id: 5,
            name: 'Must Visit Places in 2023',
            blogs: []
        },
        {
            id: 6,
            name: 'Other Blogs of Interest',
            blogs: []
        }
    ],
    status: 'idle',
    error: null
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axiosInstance.get('/blog/blogs');
    return response.data;
});

export const fetchBlogById = createAsyncThunk('blogs/fetchBlogById', async (id) => {
    const response = await axiosInstance.get(`/blog/${id}`);
    return response.data;
});

export const addBlog = createAsyncThunk('blogs/addBlog', async (blog) => {
    try {
        const response = await axiosInstance.post('/blog/addBlog', blog);
        return response.data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
});

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (blogId) => {
    const response = await axiosInstance.delete(`/blog/${blogId}`);
    return response.data;
});

export const updateBlog = createAsyncThunk('blogs/updateBlog', async (blog) => {
    const response = await axiosInstance.put(`/blog/${blog.id}`, blog);
    return response.data;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogCategories.forEach((category) => {
                    const blogs = action.payload.filter((blog) => blog.category === category.name);
                    category.blogs = [...blogs];
                });
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addBlog.fulfilled, (state, action) => {
                state.blogCategories.forEach((category) => {
                    if (category.name === action.payload.category) {
                        category.blogs.push(action.payload);
                    }
                });
            })
            .addCase(addBlog.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.blogCategories.forEach((category) => {
                    if (category.name === action.payload.category) {
                        category.blogs = category.blogs.filter((blog) => blog.id !== action.payload.id);
                    }
                });
            })
            .addCase(deleteBlog.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.blogCategories.forEach((category) => {
                    if (category.name === action.payload.category) {
                        category.blogs = category.blogs.map((blog) => {
                            if (blog.id === action.payload.id) {
                                return action.payload;
                            }
                            return blog;
                        });
                    }
                });
            });
    },
});

export const selectAllBlogs = (state) => state.blogs.blogCategories;
export const selectBlogById = (state, id) =>
    state.blogs.blogCategories.find((category) => category.id === id);

export const { } = blogsSlice.actions;
export default blogsSlice.reducer;
