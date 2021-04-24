import { useContext } from "react";
import UserContext from "../helpers/userContext";

function Home() {
  const currentUser = useContext(UserContext);
  return <h1>Hi {currentUser.username}!</h1>;
}

export default Home;
