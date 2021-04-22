import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <NavLink className="NavHome" exact to="/">
        Jobly
      </NavLink>
      <NavLink exact to="/companies">
        Companies
      </NavLink>
      <NavLink exact to="/jobs">
        Jobs
      </NavLink>
      <NavLink exact to="/signup">
        Sign Up
      </NavLink>
      <NavLink exact to="/login">
        Log In
      </NavLink>
    </nav>
  );
}

export default Nav;
