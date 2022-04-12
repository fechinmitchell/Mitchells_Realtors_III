import styles from "./Filters.module.scss";
import PriceRange from "./PriceRange";
import BuyCheckbox from "./BuyCheckbox";
import RentCheckbox from "./RentCheckbox";
import LocationCheckbox from "./LocationCheckbox";


const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.categories}>
        <div className={styles.category}>
          <BuyCheckbox />
          <PriceRange />
        </div>
        <div className={styles.category}>
          <RentCheckbox />
        </div>
        <div className={styles.category}>
          <LocationCheckbox />
        </div>
      </div>
    </div>
  );
};

export default Filters;
