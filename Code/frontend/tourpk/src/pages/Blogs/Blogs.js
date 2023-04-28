import styles from "./Blogs.module.css";
import 'react-tabs/style/react-tabs.css';
import { HorizontalScroll } from "../../components/index";
import { useEffect, useState } from "react";
import { categories } from "../../utils/blogsCategories";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../app/features/blogs/blogsSlice";


const Blogs = () => {
//  const blogCategories = useSelector((state) => state.blogs.blogCategories);
    const [blogs, setBlogs] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const dispatch = useDispatch();

    const fetchBlogs = async () => {
        try {
            const res = await axios.get("/blog/blogs");
            console.log(res);
            setBlogs(res.data);
            setDataFetched(true);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.blogheader}> Blogs for Tourists</h1>
                <p className={styles.headingBlogs}> Natural beauty is un matched. Pakistan have world most beautiful places for visit, specially at its best in northern areas of Pakistan and Kashmir region. This part of the country is famous all around the world because of sky high mountains, lush green valleys, mighty rivers, beautiful lakes, and amazing wildlife. The Pradise on Earth ‘Neelum Valley’ Mini Switzerland ‘Swat Valley’ and Mountain Kingdom ‘Hunza valley’ are the major tourist attractions in Pakistan. All these places are real natural beauty of the world. Here, below is a list of Best Natural Places to Visit in Pakistan. </p>
                {!dataFetched ?
                    <div> Loading...</div>
                    : <div className={styles.tabs}>
                        {categories.map((category, index) => {
                            const blog = blogs.filter((categ) => categ.category === category.name);
                            return (
                                <div key={index}>
                                    <HorizontalScroll blogs={blog} title={category.name} />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        </>
    );
};

export default Blogs;
