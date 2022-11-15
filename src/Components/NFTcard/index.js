import styles from './styles.module.css'
import { Star } from '../../assets';

const NFTcard = ({image, name, value, length, distance}) => {
    return (
        <div className={styles.nftCard}>
            <img src={image} alt="" />
            <div className={styles.sect1}>
                <p>{name}</p>
                <p className={styles.mbt}>{value}</p>
            </div>
            <div className={styles.sect2}>
                <p>{distance}</p>
                <p>{length}</p>
            </div>
            <div className={styles.rating}>
                <Star/> <Star/> <Star/> <Star/> <Star/>
            </div>
            

        </div>
      );
}
 
export {NFTcard};