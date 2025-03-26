import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);

    if (!user) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password. Try again.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Section - Form (First on Small Screens) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center order-1 md:order-none">
          <h2 className="text-2xl font-bold text-center mb-6">Login Now</h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
            >
              SIGN IN
            </button>
          </form>
        </div>

        {/* Right Section - Signup Prompt (Second on Small Screens) */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center relative flex order-2 md:order-none"
          style={{
            backgroundImage: "url('/img1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
            <h3 className="text-xl font-bold font-merriweather">New here?</h3>
            <p className="mb-4 font-merriweather">Sign up and explore new opportunities!</p>
            <Link to="/signup">
              <button className="border-2 border-green-400 text-white px-6 py-2 rounded-full bg-green-700 font-bold hover:bg-green-600 transition font-merriweather">
                Signup
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
