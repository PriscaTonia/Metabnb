import { SecondaryNav } from "../SecondaryNav";
import styles from "./styles.module.css";
import { NFTcard } from "../NFTcard";
import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
  twelfth,
  thirteenth,
  fourteenth,
  fifteenth,
  sixteenth,
} from "../../assets";

const PlaceToStay = () => {
  const data = [
    {
      image: fifth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: sixth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: seventh,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: eighth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: first,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: second,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: third,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: fourth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: ninth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: tenth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: eleventh,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: twelfth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: thirteenth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: fourteenth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: fifteenth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
    {
      image: sixteenth,
      name: "Desert King",
      value: "1MBT per night",
      distance: "2345km away",
      length: "available for 2weeks stay",
    },
  ];
  return (
    <div className={styles.container}>
      <SecondaryNav />
      <div className={styles.cardContainer}>
        {data.map((info) => {
          return (
            <NFTcard
              image={info.image}
              name={info.name}
              value={info.value}
              distance={info.distance}
              length={info.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export { PlaceToStay };
