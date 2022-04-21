import styles from "./Login.module.scss";
import Card from "../../card/Card";
import { useQuery } from "@apollo/client";
import { BUY_CARDS } from "../../../utils/Queries";
import Navbar from "../../navbar/Navbar";
import Footer from "../Home/Sections/Footer";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import FAQs from "../Home/Sections/FAQs";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile"

const Login = () => {

  return (
    <main>
      <Navbar />
      <div data-testid="todo-1" className={styles.content}>
        <h1>My Account</h1>
        <div className={styles.card}>
          <LoginButton/>
          <LogoutButton/>
          <Profile/>
        </div>
      </div>

      <Footer />


    </main>
  );
};

export default Login;
