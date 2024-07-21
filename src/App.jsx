// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesglobal } from "./routes/routesglobal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const routes = createBrowserRouter(routesglobal);
  //Esto se hace para que se renderice el componente NavbarGlobal en todas las rutas

  //El router provider es el que se encarga de renderizar las rutas
  return <RouterProvider router={routes} />;
}

export default App;
