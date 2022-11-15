import styles from "./styles.module.css";
import { FaTimes, FaAngleRight } from "react-icons/fa";
import { metamask, walletconnect } from "../../assets";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${showHideClassName} ${styles.modal}`}>
      <main className={styles.modalMain}>
        <header className={styles.modalHeader}>
          <h6>Connect Wallet</h6>
          <button type="button" className={styles.btn} onClick={handleClose}>
            <FaTimes />
          </button>
        </header>
        <section className={styles.modalSection}>
          <p>Choose your preferred wallet:</p>
          <button>
            {" "}
            <span>
              {" "}
              <img src={metamask} alt="" /> Metamask
            </span>{" "}
            <FaAngleRight />{" "}
          </button>
          <button>
            {" "}
            <span>
              {" "}
              <img src={walletconnect} alt="" /> WalletConnect
            </span>{" "}
            <FaAngleRight />{" "}
          </button>
        </section>
      </main>
    </div>
  );
};

export { Modal };
