import Inicio from "../pages/Inicio/inicio.jsx";
import Citas from "../pages/Citas/citas.jsx";
import Error404 from "../pages/Error404.jsx";
import Listadocitas from "../pages/ListadoCitas/listadocitas.jsx";
import NavbarGlobal from "../components/NavbarGlobal/NavbarGlobal.jsx";

export const routesglobal = [
  {
    path: "/",
    element: <NavbarGlobal />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/citas",
        element: <Citas />,
      },
      {
        path: "/listado-de-citas",
        element: <Listadocitas />,
      },
    ],
  },
  // Ruta para manejar cualquier otra URL no definida
  {
    path: "*",
    element: <Error404 />,
  },
];

/* Aqui esto se hace para que la navbar sea como el componente padre de todas las rutas
    por esto, se pone una lista de children, para indicar que las rutas que estan dentro de esta
    */
