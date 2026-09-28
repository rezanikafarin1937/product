import {
  FaInstagram,
  FaPaperPlane,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaChevronLeft,
  FaHeart,
} from "react-icons/fa6";
import styles from "./footer.module.scss";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className={styles.footer}>
        <div className={styles.footer__column}>
          <Logo width="100px" height="100px" />
          <h2 className="primary-title">تیزبین</h2>
          <h3 className="title-item">دیدی بهتر، زندگی زیباتر</h3>
          <p>
            فروشگاه اینترنتی عینک تیزبین با هدف ارائه بهترین برندهای عینک، با
            اصالت کالا و خدماتی مطمئن در کنار شماست.
          </p>
          <div className={styles.footer__socials}>
            <div className={styles.footer__social}><FaInstagram /></div>
             <div className={styles.footer__social}><FaPaperPlane /></div>
             <div className={styles.footer__social}><FaTwitter /></div>
             <div className={styles.footer__social}><FaLinkedinIn /></div>
          </div>
        </div>
        <div className={styles.footer__column}></div>
        <div className={styles.footer__column}></div>
        <div className={styles.footer__column}></div>
      </div>
    </div>
  );
};

export default Footer;
