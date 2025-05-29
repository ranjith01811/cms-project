import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../layouts/BasicLayouts";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BasicLayouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;