import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Networks from "./pages/networks";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/links" element={<Networks />} />
        </Routes>
    )
}

export default AppRoutes;
