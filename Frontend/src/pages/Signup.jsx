import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleSignup = (e) => {
    e.preventDefault();

    if (users.find((user) => user.email === email)) {
      setError("Email already registered. Please login.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 ">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Sign Up</h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-gray-100 border border-green-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-100 border border-green-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-100 border border-green-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-100 border border-green-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
            >
              SIGN UP
            </button>
          </form>
        </div>

        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center relative flex order-2 md:order-none"
          style={{
            backgroundImage: "url('/img1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
            <h3 className="text-xl font-bold font-merriweather">Already have an account?</h3>
            <p className="mb-4 font-merriweather">Login now and explore exciting opportunities!</p>
            <Link to="/login">
              <button className="border-2 border-green-400 text-white px-6 py-2 rounded-full bg-green-700 font-bold hover:bg-green-600 transition font-merriweather">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
