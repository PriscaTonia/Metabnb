import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Setting } from "../../assets";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const SecondaryNav = () => {
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
        <button className={styles.navOpenBtn} onClick={() => showNavBar()}>
            <FaBars />
          </button>
          <nav className={`${styles.navbarMobile}  ${responsive ? styles.responsiveNav : ""}`}>
            <Link to="/">Resturant</Link>
            <Link to="/">Cottage</Link>
            <Link to="/">Castle</Link>
            <Link to="/">fantast city</Link>
            <Link to="/">beach</Link>
            <Link to="/">Carbins</Link>
            <Link to="/">Off-grid</Link>
            <Link to="/">Farm</Link>
            <button className={styles.navCloseBtn} onClick={() => hideNavBar()}>
            <FaTimes />
          </button>
            </nav>

            <button className={styles.btn}>Location <Setting/></button>
      </div>
    </div>
  );
};

export { SecondaryNav };
