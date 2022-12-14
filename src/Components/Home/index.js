import styles from "./styles.module.css";
import { MbToken, MetaMask, OpenSea, bannerImage } from "../../assets";
import { descImage } from "../../assets";
import { NFTcontainer } from "../NFTcontainer";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className={styles.search}>
            <input type="text" placeholder="search for location" />
            <button>Search</button>
          </div>
        </div>
        <div className={styles.bannerImg}>
          <img src={bannerImage} alt="" />
        </div>
      </div>

      <section className={styles.brands}>
        <MbToken />
        <MetaMask />
        <OpenSea />
      </section>

      <section className={styles.cardCollection}>
        <h2>Inspiration for your next adventure</h2>
        <NFTcontainer />
      </section>

      <section className={styles.description}>
        <div className={styles.desc}>
          <h3>Metabnb NFTs</h3>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>
        <div className={styles.descImage}>
          <img src={descImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export { Home };
