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
import { Link } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import { BiBorderRadius } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="wrapper">
          <div className="margin-4y"></div>
          <h1 className="foot">تیزبین؛ انتخابی برای دیدی شفاف و استایلی متمایز</h1>
        <div className={styles.footer}>
          <div className={styles.footer__line}></div>
          {/* Column-1 */}
          <div className={styles.footer__column}>
            <Logo width="100px" height="100px" />
            <h2 className={styles.footer__titleLogo}>تیزبین</h2>
            <h3 className="title-item">دیدی بهتر، زندگی زیباتر</h3>
            <p>
              فروشگاه اینترنتی عینک تیزبین با هدف ارائه بهترین برندهای عینک، با
              اصالت کالا و خدماتی مطمئن در کنار شماست.
            </p>
            <div className={styles.footer__socials}>
              <div className={styles.footer__social}>
                <FaInstagram />
              </div>
              <div className={styles.footer__social}>
                <FaPaperPlane />
              </div>
              <div className={styles.footer__social}>
                <FaTwitter />
              </div>
              <div className={styles.footer__social}>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          {/* Column-2 */}
          <ul className={styles.footer__column}>
            <h3 className={styles.footer__title}>دسترسی سریع</h3>
            <li className={styles.footer__titleBar}>
              <Link href="/">صفحه اصلی</Link>
              <FaChevronLeft />
            </li>
            <li className={styles.footer__titleBar}>
              <Link href="/products">محصولات</Link>
              <FaChevronLeft />
            </li>
            <li className={styles.footer__titleBar}>
              <Link href="/about">درباره ما</Link>
              <FaChevronLeft />
            </li>
            <li className={styles.footer__titleBar}>
              <Link href="/guide">راهنمای خرید</Link>
              <FaChevronLeft />
            </li>
            <li className={styles.footer__titleBar}>
              <a href="/faq">سوالات متداول</a>
              <FaChevronLeft />
            </li>
            <li className={styles.footer__titleBar}>
              <Link href="/contact">تماس با ما</Link>
              <FaChevronLeft />
            </li>
          </ul>
          {/* Column-3*/}
          <ul className={styles.footer__column}>
            <h3 className={styles.footer__title}>دسته‌بندی محصولات</h3>
            <li className={styles.footer__titleBar}>
              <Link href="/products/glasses">عینک طبی</Link>
              <FaChevronLeft />
            </li>

            <li className={styles.footer__titleBar}>
              <Link href="/products/sunglasses">عینک آفتابی</Link>
              <FaChevronLeft />
            </li>

            <li className={styles.footer__titleBar}>
              <Link href="/products/sport">عینک ورزشی</Link>
              <FaChevronLeft />
            </li>

            <li className={styles.footer__titleBar}>
              <Link href="/products/kids">عینک بچگانه</Link>
              <FaChevronLeft />
            </li>

            <li className={styles.footer__titleBar}>
              <Link href="/products/accessories">لوازم جانبی</Link>
              <FaChevronLeft />
            </li>
          </ul>
          {/* Column3 */}
          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>تماس با ما</h3>
            <div className={styles.footer__titleBar}>
              <div className={styles.footer__social}>
                <FaPhone />
              </div>
              <p>۰۲۱-۱۳۳۴۵۶۷۸</p>
            </div>

            <div className={styles.footer__titleBar}>
              <span className={styles.footer__social}>
                <FaEnvelope />
              </span>

              <p>info@tizzbin.ir</p>
            </div>

            <div className={styles.footer__titleBar}>
              <span className={styles.footer__social}>
                <FaLocationDot />
              </span>
              <p>تهران، خیابان ولیعصر، پلاک ۱۳۳</p>
            </div>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__news}>
              <h4>عضویت در خبرنامه</h4>
              <p>برای دریافت جدیدترین محصولات و تخفیف‌ها</p>
              <div className="title-bar">
                <Input placeholder="ایمیل خود را وارد کنید" />
                <Button
                  style={{
                    borderRadius: "20px",
                    position: "relative",
                    left: "30px",
                    height: "40px",
                  }}
                >
                  عضویت
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__end}>
        <div className="wrapper">
          <div className={styles.footer__titleBar} style={{width : "100%"}}>
            <div>
              <span style={{position : "relative", top : "4px"}}>
                <FaHeart />
              </span>
              <span className="margin-x"></span>  
              با عشق برای نگاه بهتر |
            </div>

            <p>© 2025 تیزبین. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
