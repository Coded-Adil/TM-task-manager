import { Link } from "react-router-dom";
import tmLogo from "../../assets/fav.png";
import { useState } from "react";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <nav className="bg-black text-gray-200 shadow">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img className="h-10" src={tmLogo} alt="Task Manager Logo" />
                    <h2 className="text-3xl text-yellow-300">TM</h2>
                </Link>

                {/* Search Input */}
                <div className="hidden md:flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="block w-48 rounded border border-gray-700 bg-gray-800 p-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Menu Items */}
                <div className="flex items-center space-x-4">
                    <div className="flex gap-2">
                        <Link to='/registration' className="text-md font-semibold transition-all duration-300 border-b p-2 hover:bg-yellow-300 hover:text-black">Register</Link>
                        <Link to='/login' className="text-md font-semibold transition-all duration-300 px-4 py-2 border rounded-md bg-blue-800 hover:bg-blue-600">Login</Link>
                    </div>
                    {/* Avatar Dropdown */}
                    {/* <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            type="button"
                            className="flex items-center focus:outline-none"
                            aria-label="User Menu"
                        >
                            <img
                                className="h-10 w-10 rounded-full border border-gray-700"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="User Avatar"
                            />
                        </button> */}

                        {/* Dropdown Menu */}
                        {/* <div
                            className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-gray-700 ${dropdownOpen ? "block" : "hidden"
                                }`}
                        >
                            <div className="py-1">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/settings"
                                    className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                                >
                                    Settings
                                </Link>
                                <button
                                    type="button"
                                    className="w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-700"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;