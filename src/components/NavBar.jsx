import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({ data }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/works"} state={{ data: data }}>
          Work
        </NavLink>
        <NavLink to={"/info"}>Info</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
    </nav>
  );
}
