import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserContext from "../../helpers/userContext";
import Signup from "../userPages/Signup/Signup";
import Login from "../userPages/Login/Login";
import Profile from "../userPages/Profile/Profile";
import Logout from "../userPages/Logout/Logout";
import Companies from "../companies/Companies/Companies";
import CompanyDetail from "../companies/CompanyDetail/CompanyDetail";
import Jobs from "../jobs/Jobs/Jobs";
import Home from "../Home/Home";

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
