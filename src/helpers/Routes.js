import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserContext from "./userContext";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Logout from "../components/Logout";
import Companies from "../components/Companies";
import CompanyDetail from "../components/CompanyDetail";
import Jobs from "../components/Jobs";
import Home from "../components/Home";

function Routes({
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  applyToJob,
}) {
  const currentUser = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/signup">
        <Signup registerUser={registerUser} />
      </Route>
      <Route exact path="/login">
        <Login loginUser={loginUser} />
      </Route>
      <Route exact path="/profile">
        <Profile updateUser={updateUser} />
      </Route>
      <Route exact path="/logout">
        <Logout logoutUser={logoutUser} />
      </Route>
      <Route exact path="/companies/:handle">
        {"username" in currentUser ? (
          <CompanyDetail applyToJob={applyToJob} />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route exact path="/companies">
        {"username" in currentUser ? <Companies /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/jobs">
        {"username" in currentUser ? (
          <Jobs applyToJob={applyToJob} />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
