import { useHistory } from "react";

function Logout() {
  const history = useHistory();
  history.push("/");
}

export default Logout;
