import Button from "../../components/button/Button";
import styles from "./ContactUs.module.scss";
import ContactUsImage from "./ContactUs.jfif";

import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <main className={styles.contactUs}>
      {/* Page Header */}
      <header className={styles.contactUs__header}>
        <h1>تماس با ما</h1>

        <p>برای خرید، مشاوره و پاسخ به پرسش‌های شما، با ما در ارتباط باشید.</p>
      </header>

      {/* Contact Information */}
      <section className={styles.contactUs__info}>
        {/* Image */}
        <div className={styles.contactUs__image}>
          <img src={ContactUsImage} alt="تماس با فروشگاه عینک تیزبین" />
        </div>

        {/* Details */}
        <div className={styles.contactUs__details}>
          <span className={styles.contactUs__subtitle}>
            با ما در ارتباط باشید
          </span>

          <h2>
            خوشحالیم که <span>صدای شما را می‌شنویم</span>
          </h2>

          <p className={styles.contactUs__description}>
            اگر درباره محصولات، خرید یا خدمات تیزبین سوالی دارید، می‌توانید از
            طریق راه‌های ارتباطی زیر با ما در تماس باشید.
          </p>

          <div className={styles.contactUs__items}>
            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaPhone />
              </div>

              <div>
                <span>شماره تماس</span>
                <a href="tel:09120000000">0912 000 0000</a>
              </div>
            </div>

            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaEnvelope />
              </div>

              <div>
                <span>ایمیل</span>
                <a href="mailto:info@tizbin.ir">info@tizbin.ir</a>
              </div>
            </div>

            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaLocationDot />
              </div>

              <div>
                <span>آدرس</span>
                <p>تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
              </div>
            </div>

            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaClock />
              </div>

              <div>
                <span>ساعات کاری</span>
                <p>شنبه تا پنجشنبه، ۹ تا ۲۱</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.contactUs__formSection}>
        <div className={styles.contactUs__formHeader}>
          <span>پیام شما</span>

          <h2>چطور می‌توانیم کمکتان کنیم؟</h2>

          <p>
            پیام خود را برای ما ارسال کنید؛ در اولین فرصت پاسخگوی شما خواهیم
            بود.
          </p>
        </div>

        <form className={styles.contactUs__form}>
          <div className={styles.contactUs__row}>
            <div className={styles.contactUs__field}>
              <label htmlFor="name">نام و نام خانوادگی</label>

              <input id="name" type="text" placeholder="نام خود را وارد کنید" />
            </div>

            <div className={styles.contactUs__field}>
              <label htmlFor="phone">شماره تماس</label>

              <input
                id="phone"
                type="tel"
                placeholder="شماره تماس خود را وارد کنید"
              />
            </div>
          </div>

          <div className={styles.contactUs__field}>
            <label htmlFor="subject">موضوع</label>

            <input id="subject" type="text" placeholder="موضوع پیام" />
          </div>

          <div className={styles.contactUs__field}>
            <label htmlFor="message">پیام</label>

            <textarea
              id="message"
              rows="6"
              placeholder="پیام خود را بنویسید..."
            />
          </div>

          <div className={styles.contactUs__btn}>
            <Button  type="submit">
              ارسال پیام
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
