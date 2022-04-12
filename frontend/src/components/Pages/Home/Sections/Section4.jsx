import styles from "./Section4.module.scss";
import building3 from "../../../../assets/house_news.jpg";
import { ArrowButton } from "../../../buttons/Buttons";


const Section4 = () => {
  return (
    <section className={styles.section_2}>
      <div className={styles.section_2_image_container}>
        <img src={building3} alt="building3" />
      </div>
      <div className={styles.section_2_slogan}>
        <h1>
          Latest News in the Californian Real Estate Market. 
          
        </h1>
      </div>
      <div className={styles.selection}>
        <div className={styles.buy}>
          <h3>Price Plateau in SF</h3>
          <p>
            San Fransisco House Prices Plateau For The First Time in 12 Years.
          </p>
          <ArrowButton text="See More" path="" />
        </div>
        <div className={styles.rent}>
          <h3>Rent Skyrocketing in LA</h3>
          <p>
            Rents Have Skyrocketed by 23% in Los Angeles in the First Quarter of 2022 as Inflation Takes A Hold.
          </p>
          <ArrowButton text="Find Out" path="" />
        </div>

        <div className={styles.sell}>
          <h3>Section 198A Passed</h3>
          <p>
            Section 198A Has Been Passed In The Senate Effecting All Home Owners in LA.
          </p>
          <ArrowButton text="Read More" path="" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
