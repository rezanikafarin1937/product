import BenefitCard from "../BenefitCard/BenefitCard";
import CreditCard from "../../../icons/CreditCard/CreditCard";
import Shield from "../../../icons/Shield/Shield";
import Support from "../../../icons/Support/Support";
import Truck from "../../../icons/Truck/Truck";
import styles from "./benefits.module.scss";

const widthIcon = "50px";
const heightIcon = "50px";

const Benefits = () => {

  return (
    <div className="wrapper">
      <section className={styles.benefits}>
        <BenefitCard
          icon={<CreditCard  width={widthIcon} height={heightIcon} color="#000000" />}
          title="پرداخت امن"
          description="پرداخت کاملاً ایمن"
        />

        <BenefitCard
          icon={<Support  width={widthIcon} height={heightIcon} color="#000000" />}
          title="پشتیبانی ۲۴ ساعته"
          description="همیشه در کنار شما هستیم"
        />

        <BenefitCard
          icon={<Shield width={widthIcon} height={heightIcon} color="#000000" />}
          title="تضمین اصالت کالا"
          description="تمام محصولات اصل هستند"
        />

        <BenefitCard
          icon={<Truck width={widthIcon} height={heightIcon} color="#000000" />}
          title="ارسال سریع"
          description="ارسال در کوتاه‌ترین زمان"
        />


      </section>
    </div>
  );
};

export default Benefits;
