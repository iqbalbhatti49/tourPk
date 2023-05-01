import { Hotels, Restaurants, TourGuides, MesmerizingSight, MustVisitPlace, Other } from './Data';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    blogCategories: [
        {
            id: 1,
            name: 'Hotels & Resorts',
            blogs: Hotels
        },
        {
            id: 2,
            name: 'Food & Restaurants',
            blogs: Restaurants
        },
        {
            id: 3,
            name: 'Tour Guides',
            blogs: TourGuides
        },
        {
            id: 4,
            name: 'Mesmerizing Sight Seeing Places',
            blogs: MesmerizingSight
        },
        {
            id: 5,
            name: 'Must Visit Places in 2023',
            blogs: MustVisitPlace
        },
        {
            id: 6,
            name: 'Other Blogs of Interest',
            blogs: Other
        }
    ],
    status: 'idle',
    error: null
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get('/blog/blogs');
    return response.data;
});

export const addBlog = createAsyncThunk('blogs/addBlog', async (blog) => {
    const response = await axios.post('/blog/addBlog', blog);
    // console.log("back from add blog api *******");
    return response.data;
});


export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (blogId) => {
    const response = await axios.delete(`/blog/${blogId}`);
    return response.data;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        updateBlog: (state, action) => {
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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogCategories.forEach((category, index) => {
                    const blogs = action.payload.filter((blog) => blog.category === category.name);
                    state.blogCategories[index].blogs.push(...blogs);
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
            });
    },
});

export const selectAllBlogs = (state) => state.blogs.blogCategories;
export const selectBlogById = (state, id) =>
    state.blogs.blogCategories.find((category) => category.id === id);

export const { updateBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
