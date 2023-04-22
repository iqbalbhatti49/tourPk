import styles from "./Blogs.module.css";
import 'react-tabs/style/react-tabs.css';
import { HorizontalScroll } from "../../components/index";
import { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
    const categories = [
        { id: 1, name: 'Hotels & Resorts' },
        { id: 2, name: 'Food & Restaurants' },
        { id: 3, name: 'Tour Guides' },
        { id: 4, name: 'Mesmerizing Sights' },
        { id: 5, name: 'Must Visit Places' },
        { id: 6, name: 'Other' },
    ];
    const [blogs, setBlogs] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get("/allBlogs");
            console.log(blogs.length);
            setBlogs(res.data);
            setDataFetched(true);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.blogheader}>Tourist Attraction Blogs of Pakistan</h1>
                <p> Natural beauty is un matched. Pakistan have world most beautiful places for visit, specially at its best in northern areas of Pakistan and Kashmir region. This part of the country is famous all around the world because of sky high mountains, lush green valleys, mighty rivers, beautiful lakes, and amazing wildlife. The Pradise on Earth ‘Neelum Valley’ Mini Switzerland ‘Swat Valley’ and Mountain Kingdom ‘Hunza valley’ are the major tourist attractions in Pakistan. All these places are real natural beauty of the world. Here, below is a list of Best Natural Places to Visit in Pakistan. </p>
                {!dataFetched ?
                    <div>Loading...</div>
                    : <div className={styles.tabs}>
                        {categories.map((category) => {
                            const blog = blogs.filter((categ) => categ.category === category.name);
                            return (
                                <div key={category.id}>
                                    <h1 className={styles.blogHeading}>{category.name}</h1>
                                    <HorizontalScroll blogs={blog} />
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