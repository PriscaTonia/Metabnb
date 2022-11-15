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
        },
        {
            image: fourth,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        },
        {
            image: fifth,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        },
        {
            image: sixth,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        },
        {
            image: seventh,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        },
        {
            image: eighth,
            name: "Desert King",
            value: "1MBT per night",
            distance: "2345km away",
            length: "available for 2weeks stay"
        }
    ]
    return ( 
        <div className={styles.container}>
        {data.map((info) =>{
            return(
               
                    <NFTcard image ={info.image} name ={info.name} value={info.value} distance ={info.distance} length = {info.length}/>
               
            )
        })}
         </div>
        
     );
}
 
export {NFTcontainer};