import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'leaflet/dist/leaflet.css';


// Importing page components
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 👇 Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* 👇 Auth Pages */}
        <Route path="/login" element={<AuthPage />} />

        {/* 👇 Main Application */}
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
};

export default App;




