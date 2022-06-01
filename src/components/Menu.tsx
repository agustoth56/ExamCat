import { Link } from "react-router-dom";
import '../main.css';

export const logout = {
  title: "Log In",
  link: "/login",
};

const Menu = () => {

  return (
    <nav className="menu">
      <Link to="/logout" className="menuItem rightMenuItem">
          <p>Log out</p>
      </Link>
    </nav>
  );
};

export default Menu;
