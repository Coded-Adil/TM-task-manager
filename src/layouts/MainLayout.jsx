import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        // <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900">
            {/* NavBar */}
            <div className="bg-black border-b">
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;