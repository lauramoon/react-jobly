import { Route, Switch, Redirect } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Companies from "../components/Companies";
import CompanyDetail from "../components/CompanyDetail";
import Jobs from "../components/Jobs";
import Home from "../components/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;