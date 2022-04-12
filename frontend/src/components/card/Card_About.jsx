import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import building3 from "../../assets/building3.jpg";
import styles from "./Card_About.module.scss";

import { Link } from "react-router-dom";

const Card_About = ({ info, showInfo, secondClass }) => {

  return (
    <div className={`${styles.aboutcard_container} ${secondClass}`}>
      <div className={styles.image_container}>
        <img src={info.imageSource} alt="picture" />
      </div>
      <h3>{info.city}</h3>
      <h4>
        <p className={styles.name}>{`${info.name},`}</p>
        {/* <p className={styles.phone_number}>{` ${info.phone_number}`}</p> */}
      </h4>
      <h4>
        <p className={styles.email}>{`${info.email}`}</p>
        {/* <p className={styles.phone_number}>{` ${info.phone_number}`}</p> */}
      </h4>
      {/* <h4>
        <p className={styles.phone_number}>{` ${info.phone_number}`}</p>
      </h4> */}
      <div className={styles.info}>
        <div className={styles.row_1}>

          {/* <div className={styles.introduction}>
            <span>{`${info.introduction} Introduction`}</span>
          </div> */}
        </div>
        {/* <div className={styles.card_btn}>
          <Link to={`/property/${info.id}`}>See More</Link>
          <Link to={`/team/${info.id}`}>Contact Rep</Link>
        </div> */}
      </div>
    </div>
  );
};

Card_About.defaultProps = {
  info: {
    id: undefined,
    imageSource: building3,
    category: "Buy",
    name: "Emile Johnson",
    email: "emile@realtor.com",
    phone_number: "+447307088009",
    introduction: "",
    city: "San Francisco",
  },
  secondClass: "undefined",
};

export default Card_About;