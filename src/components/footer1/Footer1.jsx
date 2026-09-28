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

import styles from "./Footer1.module.scss";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer} dir="rtl">
      {/* Decorative Shapes */}
      <div className={styles.footer__shapeRight}></div>
      <div className={styles.footer__shapeLeft}></div>

      <div className={styles.footer__container}>
        {/* =========================
            Brand
        ========================== */}

        <div className={styles.footer__brand}>
          <div className={`primary-title ${styles.footer__logo}`}>
            <div className={styles.footer__logoGlasses}>
              <Logo width="100px" height="100px" />
              {/* <span className={styles.footer__glass}></span>
              <span className={styles.footer__bridge}></span>
              <span className={styles.footer__glass}></span> */}
            </div>

            <h2>تیزبین</h2>
          </div>

          <h3 className="primary-title">دیدی بهتر، زندگی زیباتر</h3>

          <p>
            فروشگاه اینترنتی عینک تیزبین با هدف ارائه بهترین برندهای عینک، با
            اصالت کالا و خدماتی مطمئن در کنار شماست.
          </p>

          {/* Socials */}

          <div className={styles.footer__socials}>
            <a href="#" aria-label="Instagram">
              <div className={styles.footer__icon}>
                <FaInstagram />
              </div>
            </a>

            <a href="#" aria-label="Telegram">
              <div className={styles.footer__icon}>
                <FaPaperPlane />
              </div>
            </a>

            <a href="#" aria-label="Twitter">
              <div className={styles.footer__icon}>
                <FaTwitter />
              </div>
            </a>

            <a href="#" aria-label="LinkedIn">
              <div className={styles.footer__icon}>
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>

        {/* =========================
            Quick Links
        ========================== */}

        <div className={styles.footer__column}>
          <h3>دسترسی سریع</h3>

          <ul>
            <li>
              <FaChevronLeft />
              <a href="/">صفحه اصلی</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/products">محصولات</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/about">درباره ما</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/guide">راهنمای خرید</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/faq">سوالات متداول</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/contact">تماس با ما</a>
            </li>
          </ul>
        </div>

        {/* =========================
            Categories
        ========================== */}

        <div className={styles.footer__column}>
          <h3>دسته‌بندی محصولات</h3>

          <ul>
            <li>
              <FaChevronLeft />
              <a href="/products/glasses">عینک طبی</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/products/sunglasses">عینک آفتابی</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/products/sport">عینک ورزشی</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/products/kids">عینک بچگانه</a>
            </li>

            <li>
              <FaChevronLeft />
              <a href="/products/accessories">لوازم جانبی</a>
            </li>
          </ul>
        </div>

        {/* =========================
            Contact + Newsletter
        ========================== */}

        <div className={styles.footer__contact}>
          <h3>تماس با ما</h3>

          <div className={styles.footer__contactItem}>
            <span>
              {" "}
              <FaPhone />
            </span>

            <p>۰۲۱-۱۳۳۴۵۶۷۸</p>
          </div>

          <div className={styles.footer__contactItem}>
            <span>
              {" "}
              <FaEnvelope />
            </span>

            <p>info@tizzbin.ir</p>
          </div>

          <div className={styles.footer__contactItem}>
            <span>
              {" "}
              <FaLocationDot />
            </span>

            <p>تهران، خیابان ولیعصر، پلاک ۱۳۳</p>
          </div>

          {/* Newsletter */}

          <div className={styles.footer__newsletter}>
            <div className={styles.footer__line}></div>

            <h4>عضویت در خبرنامه</h4>

            <p>برای دریافت جدیدترین محصولات و تخفیف‌ها</p>

            <form className={styles.footer__form}>
              <input type="email" placeholder="ایمیل خود را وارد کنید" />

              <button type="submit">عضویت</button>
            </form>
          </div>
        </div>
      </div>

      {/* =========================
          Bottom
      ========================== */}

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottomContainer}>
          <p>© 2025 تیزبین. تمامی حقوق محفوظ است.</p>

          <p className={styles.footer__slogan}>
            با عشق برای نگاه بهتر
            <FaHeart />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
