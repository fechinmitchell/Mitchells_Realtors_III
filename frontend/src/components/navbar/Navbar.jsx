import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";
import useClickOutside from "../../customHooks/ClickOutside";

const Navbar = ({ BurgerColour }) => {
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink
          to={`/${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };

  const [isNavOpen, setisNavOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNavOpen(false);
  });

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/">Mitchell's Realtors</Link>
        </div>

        {/* NAV-BURGER */}
        <div
          className={styles.mobile_menu}
          style={{ color: BurgerColour }}
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar_ul
          }`}
          ref={domNode}
        >
          <div
            className={styles.mobile_close}
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>
          <MenuLink url="" path="Home" />
          <MenuLink url="buy" path="Buy" />
          <MenuLink url="rent" path="Rent" />
          <MenuLink url="search" path="Search" />
          <MenuLink url="about" path="Team" />
          <a to="http://localhost:1337/admin/content-manager/collectionType/api::category.category?page=1&pageSize=10&sort=Category:ASC" className={styles.login}>
            <span>Login</span>
          </a>
        </ul>

        {/* Staff Login */}
        <a href="http://localhost:1337/admin/content-manager/collectionType/api::category.category?page=1&pageSize=10&sort=Category:ASC" target="_blank" className={styles.login_container}>
          <span style={{ color: BurgerColour }}>Staff Login</span>
          <BsArrowRight style={{ color: BurgerColour }} />
        </a>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColour: "rgb(26, 55, 58)",
};
export default Navbar;
