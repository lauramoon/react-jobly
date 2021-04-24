import { useHistory } from "react-router-dom";

function Logout({ logoutUser }) {
  const history = useHistory();
  logoutUser();
  history.push("/");
  return <div></div>;
}

export default Logout;
