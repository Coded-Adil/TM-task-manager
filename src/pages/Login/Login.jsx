import { useState } from "react";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("Email:", email, "Password:", password);
    };


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-200">
                    Welcome Back
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email Input */}
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            name="email"
                            className="mt-1 w-full rounded border border-gray-700 bg-gray-900 p-2 text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            name="password"
                            className="mt-1 w-full rounded border border-gray-700 bg-gray-900 p-2 text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full rounded border-2 border-blue-500 px-4 py-2 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                    >
                        Log In
                    </button>

                    {/* Google Login Button */}
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-2 rounded bg-red-600 px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
                    >
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <path
                                d="M44.5 24.65c0-1.6-.15-3.15-.4-4.65H24v9.1h11.6c-.5 2.55-1.85 4.65-3.95 6.1v5h6.4c3.75-3.45 5.95-8.55 5.95-15.55z"
                                fill="#4285F4"
                            />
                            <path
                                d="M24 46c5.4 0 9.9-1.8 13.2-4.9l-6.4-5c-1.75 1.15-4 1.85-6.8 1.85-5.25 0-9.7-3.5-11.3-8.25H6.1v5.25C9.3 42.55 16 46 24 46z"
                                fill="#34A853"
                            />
                            <path
                                d="M12.7 28.75A11.8 11.8 0 0 1 12 24c0-1.65.3-3.25.7-4.75v-5.25H6.1A22.9 22.9 0 0 0 2 24c0 3.65.85 7.1 2.4 10.25l6.3-5.5z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M24 9.5c3.05 0 5.75 1.05 7.9 3.1l5.9-5.85C33.85 3.1 29.4 1 24 1 16 1 9.3 4.45 6.1 11l6.6 5.2C14.3 11.55 18.75 9.5 24 9.5z"
                                fill="#EA4335"
                            />
                        </svg>
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Login;