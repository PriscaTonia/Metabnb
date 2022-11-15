import { Facebook, FooterIcon, Instagram, Twitter } from '../../assets';
import styles from './styles.module.css'

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <section className={styles.sectionHeader}>
                <FooterIcon/>
                <div className={styles.socials}>
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </div>
                <p>	&#169; 2022 Metabnb</p>
            </section>
            <section className={styles.sectionCommunity}>
                <h5>Community</h5>
                <br />
                <a href="#">NFt</a>
                <a href="#">Tokens</a>
                <a href="#">Landlords</a>
                <a href="#">Discord</a>
            </section>
            <section className={styles.sectionPlaces}>
            <h5>Places</h5>
                <br />
                <a href="#">Castle</a>
                <a href="#">Farms</a>
                <a href="#">Beach</a>
                <a href="#">Learn more</a>
            </section>
            <section className={styles.sectionAbout}>
            <h5>About us</h5>
                <br />
                <a href="#">Roadmap</a>
                <a href="#">Creators</a>
                <a href="#">Career</a>
                <a href="#">Contact us</a >
            </section>
        </div>
     );
}
 
export {Footer};