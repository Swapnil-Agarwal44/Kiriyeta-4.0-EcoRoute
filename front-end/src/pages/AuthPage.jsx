

// new auth code with api integration. 


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setFormData({ fullName: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post("http://192.168.137.211:5000/api/login", {
          fullName: formData.email,
          password: formData.password,
        });
        localStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      } else {
        // SIGNUP
        const res = await axios.post("http://192.168.137.211:5000/api/signup", {
          username: formData.fullName,
          password: formData.password,

        });
        alert("Signup successful. Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong.");
    }
  };

  const containerVariants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={containerVariants}
            >
              <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
                Login to EcoRoute
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="name"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                  Login
                </button>
              </form>
              <p className="text-sm text-center mt-4">
                Not registered yet?{" "}
                <button
                  onClick={toggleForm}
                  className="text-blue-600 hover:underline"
                >
                  Sign up here
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={containerVariants}
            >
              <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
                Create an Account
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm text-center mt-4">
                Already have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-blue-600 hover:underline"
                >
                  Login here
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;


