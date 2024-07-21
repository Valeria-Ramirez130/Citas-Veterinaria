// App.jsx
import { BrowserRouter } from "react-router-dom";
import NavbarGlobal from "./components/NavbarGlobal/NavbarGlobal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavbarGlobal />
    </BrowserRouter>
  );
}

export default App;
