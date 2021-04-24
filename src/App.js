import Routes from "./helpers/Routes";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import JoblyApi from "./helpers/api";
import UserContext from "./helpers/userContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const getUserData = async (username) => {
      const res = await JoblyApi.getUser(username);
      setCurrentUser(res);
    };
    token.length > 0 ? getUserData(currentUser.username) : setCurrentUser({});
    // eslint-disable-next-line
  }, [token]);

  const registerUser = (newUserData) => {
    const register = async (newUserData) => {
      try {
        const res = await JoblyApi.registerNewUser(newUserData);
        setCurrentUser({ username: newUserData.username });
        setToken(res);
      } catch (err) {
        console.log(err);
      }
    };
    register(newUserData);
  };

  const loginUser = async (userData) => {
    const login = async (userData) => {
      try {
        const res = await JoblyApi.loginUser(userData);
        setCurrentUser({ username: userData.username });
        setToken(res);
        return true;
      } catch (err) {
        console.log(err);
        setToken("");
        return false;
      }
    };
    return login(userData);
  };

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <BrowserRouter>
          <Nav />
          <div className="Content">
            <Routes registerUser={registerUser} loginUser={loginUser} />
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
