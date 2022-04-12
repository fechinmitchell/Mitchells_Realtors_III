import styles from "./FAQs.module.scss";
import IMG_FAQs from "../../../../assets/IMG_FAQs.jpg";
import { ArrowButton } from "../../../buttons/Buttons";

const FAQs = () => {
  return (
    <section className={styles.section_2}>
      <div className={styles.section_2_image_container}>
        <img src={IMG_FAQs} alt="IMG_FAQs" />
      </div>
      <div className={styles.section_2_slogan}>
        <h1>
          Frequently Asked Question
          
        </h1>
      </div>
      <div className={styles.selection}>
        <div className={styles.buy}>
          <h3>Deposit</h3>
          <p>
            A deposit in California is usually around 5-20% of the overall value of the house.
          </p>
          <ArrowButton text="More Information" path="" />
        </div>
        <div className={styles.rent}>
          <h3>Mortgage</h3>
          <p>
            We can advice you on how to best get your mortgage and which bank would suit your situation.
          </p>
          <ArrowButton text="See Your Options" path="" />
        </div>

        <div className={styles.sell}>
          <h3>Selling</h3>
          <p>
            Our team can help you with every part of the selling process please contact are team to help you along the way.
          </p>
          <ArrowButton text="Contact Our Team" path="" />
        </div>
      </div>
    </section>
  );
};

export default FAQs;