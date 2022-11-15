import styles from './styles.module.css'
import { NFTcard } from "../NFTcard";
import { first, second, third, fourth, fifth, sixth, seventh, eighth } from "../../assets";

const NFTcontainer = () => {
    const data = [
        {
            image: first,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        },
        {
            image: second,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        },
        {
            image: third,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        }
    ]
    return ( 
        data.map((info) =>{
            return(
                <div className={styles.container}>
                    <NFTcard image ={info.image} name ={info.name} value={info.value} distance ={info.distance} length = {info.length}/>
                </div>
            )
        })
        
     );
}
 
export {NFTcontainer};