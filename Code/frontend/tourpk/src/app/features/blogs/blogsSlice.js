import { Hotels, Restaurants, TourGuides, MesmerizingSight, MustVisitPlace, Other } from './Data';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";
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
            name: 'Restaurants & Cafes',
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
            name: 'Must Visit Place in 2023',
            blogs: MustVisitPlace
        },
        {
            id: 6,
            name: 'Other Blogs of Interest',
            blogs: Other
        }
    ]
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    //const response = await axios.get('/allBlogs');
    return { Hotels, Restaurants, TourGuides, MesmerizingSight, MustVisitPlace, Other };
    //return response.data;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.blogCategories.forEach((category) => {
                if (category.name === action.payload.category) {
                    category.blogs.push(action.payload);
                }
            });
        },
        deleteBlog: (state, action) => {
            state.blogCategories.forEach((category) => {
                if (category.name === action.payload.category) {
                    category.blogs = category.blogs.filter((blog) => blog.id !== action.payload.id);
                }
            });
        },
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
                // state.blogs.forEach((category, index) => {
                //     const blogs = action.payload.filter((blog) => blog.category === category.name);
                //     state.blogCategories[index].blogs = blogs;
                // });
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllBlogs = (state) => state.blogs.blogCategories;
export const selectBlogById = (state, id) =>
    state.blogs.blogCategories.find((category) => category.id === id);

export const { addBlog, deleteBlog, updateBlog } = blogsSlice.actions;
export default blogsSlice.reducer;