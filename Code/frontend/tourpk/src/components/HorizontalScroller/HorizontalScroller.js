import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Arrows } from '../Arrows/Arrows';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import styles from './HorizontalScroller.module.css';

// const getItems = () =>
//    Array(20)
//       .fill(0)
//       .map((_, ind) => ({ id: `element-${ind}` }));

const HorizontalScroll = (props) => {
   const { spots } = props;
   // const [items, setItems] = React.useState(getItems);
   const [selected, setSelected] = React.useState([]);
   const [position, setPosition] = React.useState(0);

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
         <p className={styles.title}>{spots[0].location}</p>
         <ScrollMenu Header={Arrows}>
            {spots.map((e, index) => (
               <PlaceCard
                  itemId={index} // NOTE: itemId is required for track items
                  city={e}
                  key={index}
                  onClick={handleClick(index)}
                  selected={isItemSelected(index)}
               />
            ))}
         </ScrollMenu>
      </>
   );
}

export default HorizontalScroll;
