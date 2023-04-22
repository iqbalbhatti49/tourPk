import { React, useEffect, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Arrows } from '../Arrows/Arrows';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import styles from './HorizontalScroller.module.css';
import { BlogCard } from '../BlogCard/BlogCard';

// const getItems = () =>
//    Array(20)
//       .fill(0)
//       .map((_, ind) => ({ id: `element-${ind}` }));

const HorizontalScroll = (props) => {
   const { spots, blogs } = props;
   // const [items, setItems] = React.useState(getItems);
   const [selected, setSelected] = useState([]);

   useEffect(() => {
      console.log("-----  -----");
      console.log(blogs);
   }, [])


   const isItemSelected = (id) => !!selected.find((el) => el === id);
   const handleClick =
      (id) =>
         ({ getItemById, scrollToItem }) => {
            const itemSelected = isItemSelected(id);
            setSelected((currentSelected) =>
               itemSelected
                  ? currentSelected.filter((el) => el !== id)
                  : currentSelected.concat(id)
            );
         };
   return (
      <>
         {spots ? (
            <>
               <p className={styles.title}>{spots[0].location}</p>
               <ScrollMenu Header={Arrows}>
                  {spots.map((e, index) => (
                     <PlaceCard
                        itemId={index}
                        city={e}
                        key={index}
                        onClick={handleClick(index)}
                        selected={isItemSelected(index)}
                     />
                  ))}
               </ScrollMenu>
            </>
         ) : blogs ? (
            <div className={styles.blogscroll}>
               <ScrollMenu Header={Arrows}>
                  {blogs.map((blog, index) => (
                     <BlogCard
                        itemId={index}
                        blog={blog}
                        key={blog.id}
                        onClick={handleClick(index)}
                        selected={isItemSelected(index)}
                     />
                  ))}
               </ScrollMenu >
            </div>
         ) : (
            <div>No data available</div>
         )}
      </>
   );
};
export default HorizontalScroll;
