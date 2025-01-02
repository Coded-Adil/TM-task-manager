import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        // <div className="max-w-6xl mx-auto">
        <div>
            {/* NavBar */}
            <div className="bg-black border-b">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;