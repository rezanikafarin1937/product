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

import styles from "./Footer.module.scss";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="margin-4y"></div>

        <h2 className="foot">
          تیزبین؛ انتخابی برای دیدی شفاف و استایلی متمایز
        </h2>

        <div className={styles.footer}>
          <div className={styles.footer__line}></div>

          {/* Column-1 */}
          <div className={styles.footer__column}>
            <Logo width="100px" height="100px" />

            <h3 className={styles.footer__titleLogo}>تیزبین</h3>

            <h4 className="title-item">دیدی بهتر، زندگی زیباتر</h4>

            <p>
              فروشگاه اینترنتی عینک تیزبین با هدف ارائه بهترین برندهای عینک، با
              اصالت کالا و خدماتی مطمئن در کنار شماست.
            </p>

            <div
              className={styles.footer__socials}
              aria-label="شبکه‌های اجتماعی"
            >
              <div className={styles.footer__social} aria-hidden="true">
                <FaInstagram />
              </div>

              <div className={styles.footer__social} aria-hidden="true">
                <FaPaperPlane />
              </div>

              <div className={styles.footer__social} aria-hidden="true">
                <FaTwitter />
              </div>

              <div className={styles.footer__social} aria-hidden="true">
                <FaLinkedinIn />
              </div>
            </div>

            {/* معرفی پروژه و توسعه‌دهنده */}

            <div
              className={styles.footer__small}
              style={{ textAlign: "center", marginTop: "12px" }}
            >
              <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>تیزبین</h2>
              <hr />

              <p>
                یک نمونه‌کار فروشگاه اینترنتی شرکت{" "}
                <strong style={{ fontWeight: "500" }}>پویاپیج</strong> 
              </p>

              <p>
                طراحی و توسعه توسط{" "}
                <strong style={{ fontWeight: "500" }}>رضا نیک‌آفرین</strong>
              </p>


              <a
                href="https://rezanikafarin1937.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="مشاهده نمونه‌کارهای دیگر توسعه‌دهنده تیزبین"
                style={{ fontSize: "11px" ,fontWeight : "400"}}
              >
                مشاهده سایر نمونه‌کارهای توسعه‌دهنده
              </a>
            </div>
          </div>

          {/* Column-2 */}
          <nav className={styles.footer__column} aria-label="دسترسی سریع">
            <h3 className={styles.footer__title}>دسترسی سریع</h3>

            <ul>
              <li>
                <Link to="/">صفحه اصلی</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/products">محصولات</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/about">درباره ما</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/guide">راهنمای خرید</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/blog">مقاله</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/contact">تماس با ما</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>
            </ul>
          </nav>

          {/* Column-3 */}
          <nav className={styles.footer__column} aria-label="دسته‌بندی محصولات">
            <h3 className={styles.footer__title}>دسته‌بندی محصولات</h3>

            <ul>
              <li>
                <Link to="/products/glasses">عینک طبی</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/products/sunglasses">عینک آفتابی</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/products/sport">عینک ورزشی</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/products/kids">عینک بچگانه</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>

              <li>
                <Link to="/products/accessories">لوازم جانبی</Link>
                <FaChevronLeft aria-hidden="true" />
              </li>
            </ul>
          </nav>

          {/* Column-4 */}
          <section
            className={styles.footer__column}
            aria-label="اطلاعات تماس و خبرنامه"
          >
            <h3 className={styles.footer__title}>تماس با ما</h3>

            <ul>
              <li>
                <div className={styles.footer__social} aria-hidden="true">
                  <FaPhone />
                </div>
                <p>۰۲۱-۱۳۳۴۵۶۷۸</p>
              </li>

              <li>
                <span className={styles.footer__social} aria-hidden="true">
                  <FaEnvelope />
                </span>
                <p>info@tizzbin.ir</p>
              </li>

              <li>
                <span className={styles.footer__social} aria-hidden="true">
                  <FaLocationDot />
                </span>
                <p className={styles.footer__small}>
                  تهران، خیابان ولیعصر، پلاک ۱۳۳
                </p>
              </li>
            </ul>

            <div className={styles.footer__line}></div>

            <div className={styles.footer__news}>
              <h4>عضویت در خبرنامه</h4>

              <p>برای دریافت جدیدترین محصولات و تخفیف‌ها</p>

              <div className="margin-2y"></div>

              <div style={{ position: "relative" }}>
                <Input placeholder="ایمیل خود را وارد کنید" />

                <Button
                  style={{
                    borderRadius: "20px",
                    position: "absolute",
                    top: "0",
                    left: "-2px",
                    height: "40px",
                    padding: "auto 0",
                  }}
                >
                  عضویت
                </Button>
              </div>

              <div className="margin-2y"></div>
            </div>
          </section>
        </div>
      </div>

      <div className={styles.footer__end}>
        <div className="wrapper">
          <div className={styles.footer__titleBar} style={{ width: "100%" }}>
            <div>
              <span
                style={{ position: "relative", top: "4px" }}
                aria-hidden="true"
              >
                <FaHeart />
              </span>
              <span className="margin-x"></span>
              با عشق برای نگاه بهتر |
            </div>

            <p>© 2025 تیزبین. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
