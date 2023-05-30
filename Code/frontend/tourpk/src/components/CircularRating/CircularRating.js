import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './CircularRating.module.css';
export const CircularRating = ({ rating }) => {
   return <div className={styles.progresBar}>
      <CircularProgressbar value={rating} maxValue={5} text={rating} />
   </div>;
};
