import BenefitCard from "../BenefitCard/BenefitCard";
import CreditCard from "../../../icons/CreditCard/CreditCard";
import Shield from "../../../icons/Shield/Shield";
import Support from "../../../icons/Support/Support";
import Truck from "../../../icons/Truck/Truck";
import styles from "./benefits.module.scss";


const Benefits = () => {

  return (
      <ul className={styles.benefits}  aria-label="مزایای خرید از تیزبین">
        <BenefitCard
          icon={<CreditCard  color="#000000" />}
          title="پرداخت امن"
          description="پرداخت کاملاً ایمن"
        />

        <BenefitCard
          icon={<Support color="#000000" />}
          title="پشتیبانی ۲۴ ساعته"
          description="همیشه در کنار شما هستیم"
        />

        <BenefitCard
          icon={<Shield color="#000000" />}
          title="تضمین اصالت کالا"
          description="تمام محصولات اصل هستند"
        />

        <BenefitCard
          icon={<Truck color="#000000" />}
          title="ارسال سریع"
          description="ارسال در کوتاه‌ترین زمان"
        />


      </ul>
  );
};

export default Benefits;
