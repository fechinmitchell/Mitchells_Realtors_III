import styles from "./About.module.scss";
import Card_About from "../../card/Card_About";
import { useQuery } from "@apollo/client";
import { ABOUT_CARDS } from "../../../utils/Queries";
import Navbar from "../../navbar/Navbar";
import Footer from "../Home/Sections/Footer";

const About = () => {
  const { loading, data, error } = useQuery(ABOUT_CARDS);

  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Our Team Members</h1>
        <div className={styles.card}>
          {loading || error ? (
            <h1 style={{ color: "#351f24" }}>Loading ...</h1>
          ) : (
            <div className={styles.cards}>
              {data.abouts.data.map((about, index) => (
                <Card_About
                  key={index}
                  secondClass={styles.card}
                  info={{
                    id: about.id,
                    category: "Seller",
                    name: `${about.attributes.Name}`,
                    email: `${about.attributes.Email}`,
                    phone_number: `${about.attributes.Phone_Number}`,
                    introduction: `${about.attributes.Introduction}`,
                    city: `${about.attributes.City}`,
                    imageSource: `http://localhost:1337${about.attributes.Picture.data.attributes.url}`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />

    </main>
    
  );
};
export default About;
