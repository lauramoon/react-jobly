import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../helpers/userContext";
import "./Nav.css";

function Nav() {
  const user = useContext(UserContext);
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
      {!("username" in user) && (
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
      )}
      {!("username" in user) && (
        <NavLink exact to="/login">
          Log In
        </NavLink>
      )}
      {"username" in user && (
        <NavLink exact to="/profile">
          Profile
        </NavLink>
      )}
      {"username" in user && (
        <NavLink exact to="/logout">
          Log Out {user.username}
        </NavLink>
      )}
    </nav>
  );
}

export default Nav;
