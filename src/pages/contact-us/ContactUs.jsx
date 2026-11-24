
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

        <p>
          برای آشنایی بیشتر با پروژه و مشاهده امکانات فروشگاه تیزبین،
          این صفحه را بررسی کنید.
        </p>
      </header>

      {/* Contact Information */}
      <section className={styles.contactUs__info}>
        {/* Image */}
        <div className={styles.contactUs__image}>
          <img
            src={ContactUsImage}
            alt="صفحه تماس با فروشگاه اینترنتی عینک تیزبین"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Details */}
        <div className={styles.contactUs__details}>
          <span className={styles.contactUs__subtitle}>
            راه‌های ارتباطی
          </span>

          <h2>
            خوشحالیم که <span>صدای شما را می‌شنویم</span>
          </h2>

          <p className={styles.contactUs__description}>
            این صفحه بخشی از نسخه نمایشی فروشگاه اینترنتی تیزبین است.
            اطلاعات تماس و خدمات ارتباطی در این نسخه فعال نیستند.
          </p>

          <div className={styles.contactUs__items}>
            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaPhone aria-hidden="true" />
              </div>

              <div>
                <span>شماره تماس</span>
                <span>در نسخه نمایشی تعریف نشده است.</span>
              </div>
            </div>

            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaEnvelope aria-hidden="true" />
              </div>

              <div>
                <span>ایمیل</span>
                <span>در نسخه نمایشی تعریف نشده است.</span>
              </div>
            </div>

            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaLocationDot aria-hidden="true" />
              </div>

              <div>
                <span>آدرس</span>
                <p>آدرس فیزیکی برای این پروژه نمایشی تعریف نشده است.</p>
              </div>
            </div>

            <div className={styles.contactUs__item}>
              <div className={styles.contactUs__icon}>
                <FaClock aria-hidden="true" />
              </div>

              <div>
                <span>ساعات کاری</span>
                <p>فعالیت فروشگاه در این نسخه نمایشی ارائه نمی‌شود.</p>
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
            این فرم صرفاً برای نمایش رابط کاربری طراحی شده و
            امکان ارسال واقعی پیام در حال حاضر وجود ندارد.
          </p>
        </div>

        <form
          className={styles.contactUs__form}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className={styles.contactUs__row}>
            <div className={styles.contactUs__field}>
              <label htmlFor="name">نام و نام خانوادگی</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="نام خود را وارد کنید"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles.contactUs__field}>
              <label htmlFor="phone">شماره تماس</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="شماره تماس خود را وارد کنید"
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className={styles.contactUs__field}>
            <label htmlFor="subject">موضوع</label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="موضوع پیام"
              required
            />
          </div>

          <div className={styles.contactUs__field}>
            <label htmlFor="message">پیام</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="پیام خود را بنویسید..."
              required
            />
          </div>

          <div className={styles.contactUs__btn}>
            <Button type="button" disabled>
              ارسال پیام
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
