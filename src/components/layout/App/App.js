import Routes from "../../Routes/Routes";
import Nav from "../Nav/Nav";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import JoblyApi from "../../../helpers/api";
import UserContext from "../../../helpers/userContext";
import useLocalStorageState from "../../../helpers/hooks";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useLocalStorageState("username", "");
  const [token, setToken] = useLocalStorageState("token", "");

  useEffect(() => {
    const getUserData = async (username) => {
      const res = await JoblyApi.getUser(username);
      setCurrentUser(res);
    };
    JoblyApi.token = token;
    token.length > 0 ? getUserData(username) : setCurrentUser({});
    // eslint-disable-next-line
  }, [token]);

  const registerUser = (newUserData) => {
    const register = async (newUserData) => {
      try {
        const res = await JoblyApi.registerNewUser(newUserData);
        setUsername(newUserData.username);
        setToken(res);
      } catch (err) {
        console.log(err);
      }
    };
    register(newUserData);
  };

  const loginUser = async (userData) => {
    try {
      const res = await JoblyApi.loginUser(userData);
      setUsername(userData.username);
      setToken(res);
      return true;
    } catch (err) {
      console.log(err);
      setToken("");
      return false;
    }
  };

  const updateUser = async (updatedUserData) => {
    try {
      const loginData = (({ username, password }) => ({ username, password }))(
        updatedUserData
      );
      const verified = await JoblyApi.verifyUser(loginData);

      if (verified) {
        const userData = (({ username, firstName, lastName, email }) => ({
          username,
          firstName,
          lastName,
          email,
        }))(updatedUserData);
        const res = await JoblyApi.updateUser(userData);
        setCurrentUser({ ...currentUser, ...res });
        return true;
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const logoutUser = () => {
    setToken("");
    setUsername("");
    setCurrentUser({});
  };

  const applyToJob = (id) => {
    const apply = async (id) => {
      console.log("applying...");
      const res = await JoblyApi.apply(currentUser.username, id);
      if (res === id) {
        const jobList = currentUser.applications;
        jobList.push(id);
        setCurrentUser((currentUser) => ({
          ...currentUser,
          applications: jobList,
        }));
      }
    };
    apply(id);
  };

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <BrowserRouter>
          <Nav />
          <div className="Content">
            <Routes
              registerUser={registerUser}
              loginUser={loginUser}
              logoutUser={logoutUser}
              updateUser={updateUser}
              applyToJob={applyToJob}
            />
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
