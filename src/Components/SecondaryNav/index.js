import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Setting } from "../../assets";

const SecondaryNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desktop}>

            <nav className={styles.navbar}>
            <Link to="/">Resturant</Link>
            <Link to="/">Cottage</Link>
            <Link to="/">Castle</Link>
            <Link to="/">fantast city</Link>
            <Link to="/">beach</Link>
            <Link to="/">Carbins</Link>
            <Link to="/">Off-grid</Link>
            <Link to="/">Farm</Link>
            </nav>
            <button className={styles.btn}>Location <Setting/></button>
      </div>
      <div className={styles.mobile}>

            <button className={styles.btn}>Connect Wallet</button>
      </div>
    </div>
  );
};

export { SecondaryNav };
