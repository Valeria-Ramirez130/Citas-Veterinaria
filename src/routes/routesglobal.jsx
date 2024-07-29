import Inicio from "../pages/Inicio/inicio.jsx";
import Citas from "../pages/Citas/citas.jsx";
import Error404 from "../pages/Error404.jsx";
import Listadocitas from "../pages/ListadoCitas/listadocitas.jsx";
import NavbarClient from "../components/NavbarClient/NavbarClient.jsx";
import NavbarAdmin from "../components/NavbarAdmin/NavbarAdmin.jsx";
import Login from "../pages/Login/login.jsx";

export const routesglobal = [
  {
    path: "/",
    element: <NavbarClient />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "citas",
        element: <Citas />,
      },
    ],
  },
  {
    path: "/",
    element: <NavbarAdmin />,
    children: [
      {
        path: "listado-citas",
        element: <Listadocitas />, // Asegúrate de usar el nombre correcto del componente
      },
    ],
  },
  {
    path: "/login",
    element: <Login />, // Mostrar solo la página de Login sin la NavbarAdmin
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

/* Aqui esto se hace para que la navbar sea como el componente padre de todas las rutas
    por esto, se pone una lista de children, para indicar que las rutas que estan dentro de esta
*/
