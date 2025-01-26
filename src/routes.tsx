import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Networks from "./pages/networks";
import Private from "./routes/private";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/social",
    element: (
      <Private>
        <Networks />
      </Private>
    ),
  },
]);

export default AppRoutes;
