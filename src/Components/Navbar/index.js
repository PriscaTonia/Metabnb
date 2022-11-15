import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { HeaderIcon } from "../../assets";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
            <div className={styles.logo}>
            <HeaderIcon />
            </div>
            <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/placetostay">Play to Stay</Link>
            <Link to="/">NFTs</Link>
            <Link to="/">Community</Link>
            </nav>
            <button className={styles.btn}>Connect Wallet</button>
      </div>
      <div className={styles.mobile}>
            <div className={styles.logo}>
            <HeaderIcon />
            </div>
            <button className={styles.btn}>Connect Wallet</button>
      </div>
    </div>
  );
};

export { Navbar };
