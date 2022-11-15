import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { HeaderIcon, mobileLogo } from "../../assets";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({showModal}) => {
 const [responsive, setResponsive] = useState(false)

  const showNavBar = () => {
    setResponsive(true)
  };

  const hideNavBar = () => {
    setResponsive(false)
  };

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
        <button onClick={showModal} className={styles.btn}>Connect Wallet</button>
      </div>
      <div className={styles.mobile}>
        <div className={styles.logo}>
          <img src={mobileLogo} alt="" />
        </div>

        <nav className={`${styles.navbarMobile}  ${responsive ? styles.responsiveNav : ""}`}>
          <button onClick={showModal} className={styles.btnMobile}>Connect Wallet</button>
          <Link to="/">Home</Link>
          <Link to="/placetostay">Play to Stay</Link>
          <Link to="/">NFTs</Link>
          <Link to="/">Community</Link>
          <button className={styles.navCloseBtn} onClick={() => hideNavBar()}>
            <FaTimes />
          </button>
        </nav>

        <button className={styles.navOpenBtn} onClick={() => showNavBar()}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export { Navbar };
