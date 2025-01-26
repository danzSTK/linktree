import { createBrowserRouter} from "react-router";

import Home from "./pages/Home";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Networks from "./pages/networks";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin/social",
        element: <Networks />,
    }
]);

export default AppRoutes;
