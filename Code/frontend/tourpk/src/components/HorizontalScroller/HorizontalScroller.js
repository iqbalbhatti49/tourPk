import { React, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Arrows } from '../Arrows/Arrows';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import styles from './HorizontalScroller.module.css';
import { BlogCard } from '../BlogCard/BlogCard';
import { HotelCard } from '../HotelCard/HotelCard';

const HorizontalScroll = (props) => {
   const { spots, blogs, items, title } = props;
   const [selected, setSelected] = useState([]);

   const isItemSelected = (id) => !!selected.find((el) => el === id);
   const handleClick =
      (id) =>
         () => {
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
               <p className={styles.title}>{title}</p>
               <ScrollMenu Header={Arrows}>
                  {blogs.map((blog, index) => (
                     <BlogCard
                        blog={blog}
                        key={blog.id}
                     />
                  ))}
               </ScrollMenu >
            </div>
         ) : items ? (
            <>
               <p className={styles.title}>{title}</p>
               <ScrollMenu Header={Arrows}>
                  {items.map((e, index) => (
                     <HotelCard
                        key={index}
                        data={e}
                     />
                  ))}
               </ScrollMenu>
            </>
         ) : (<></>)}
      </>
   );
};
export default HorizontalScroll;
