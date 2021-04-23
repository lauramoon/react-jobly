import Routes from "./helpers/Routes";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="Content">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
