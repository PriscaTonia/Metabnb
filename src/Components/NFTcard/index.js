import styles from './styles.module.css'
import { Star } from '../../assets';

const NFTcard = ({image}) => {
    return (
        <div className={styles.nftCard}>
            <img src={image} alt="" />
            <div className={styles.sect1}>
                <p>Desert King</p>
                <p>1MBT per night</p>
            </div>
            <div className={styles.sect2}>
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
            </div>
            <div className={styles.rating}>
                <Star/> <Star/> <Star/> <Star/> <Star/>
            </div>
            

        </div>
      );
}
 
export {NFTcard};