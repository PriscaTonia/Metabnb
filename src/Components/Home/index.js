import styles from "./styles.module.css";
import { MbToken, MetaMask, OpenSea } from "../../assets";
import { DescImage } from "../../assets";
// import { NFTcard } from "../NFTcard";

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
        <div className={styles.bannerImg}></div>
      </div>

      <section className={styles.brands}>
        <MbToken />
        <MetaMask />
        <OpenSea/>
      </section>

      <section className={styles.cardCollection}>
        <h2>Inspiration for your next adventure</h2>
      </section>

      <section className={styles.description}>
            <div className={styles.desc}>
                <h3>Metabnb NFTs</h3>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button>Learn more</button>
            </div>
           <img src={DescImage} alt="" />
      </section>
    </div>

    
  );
};

export { Home };
