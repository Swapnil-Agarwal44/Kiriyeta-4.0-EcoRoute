// import { useEffect, useState } from "react";

// const LandingPage = () => {
//   const [visible, setVisible] = useState({
//     hero: false,
//     features: false,
//     howItWorks: false,
//     footer: false,
//   });

//   useEffect(() => {
//     const timeouts = [];

//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, hero: true })), 100));
//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, features: true })), 1200));
//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, howItWorks: true })), 2400));
//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, footer: true })), 3600));

//     return () => timeouts.forEach(clearTimeout);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
//       {/* Hero Section */}
//      <section
//         className={`min-h-[80vh] flex flex-col items-center justify-center text-center px-4 transition-all duration-1500 ease-out ${
//           visible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-800">EcoRoute</h1>
//         <p className="text-xl italic text-gray-700 mb-6">
//           “Plan Smarter. Travel Greener. Save More.”
//         </p>
//         <p className="text-lg max-w-xl mb-8 text-gray-800">
//           Your personal travel planner that helps you choose the fastest, cheapest, or most eco-friendly route — instantly.
//         </p>
//         <a
//           href="/dashboard"
//           className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-md hover:bg-green-700 transition"
//         >
//           Get Started
//         </a>
//       </section> 

//       {/* Hero Section */}


//       {/* Feature Highlights */}
//       <section
//         className={`bg-white py-12 px-4 text-center transition-all duration-1500 ease-out ${
//           visible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         <h2 className="text-3xl font-bold text-green-800 mb-6">Why EcoRoute?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <div className="p-6 bg-green-50 rounded-lg shadow">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">🌍 Eco-Friendly Routes</h3>
//             <p className="text-gray-700">Optimize your travel to minimize carbon footprint.</p>
//           </div>
//           <div className="p-6 bg-green-50 rounded-lg shadow">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">⚡ Fast or Cheap — You Choose</h3>
//             <p className="text-gray-700">Get routes based on time or cost depending on your needs.</p>
//           </div>
//           <div className="p-6 bg-green-50 rounded-lg shadow">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">🤖 Smart Decision Engine</h3>
//             <p className="text-gray-700">Let our rule-based agent recommend the best mode of travel.</p>
//           </div>
//         </div>
//       </section>

//       {/* How it Works */}
//       <section
//         className={`bg-blue-50 py-12 px-4 text-center transition-all duration-1500 ease-out ${
//           visible.howItWorks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         <h2 className="text-3xl font-bold text-blue-800 mb-6">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <div className="p-4">
//             <div className="text-4xl mb-2">🧭</div>
//             <h4 className="font-semibold text-lg">Enter Route Details</h4>
//             <p className="text-gray-600">Source, destination, and your travel preference.</p>
//           </div>
//           <div className="p-4">
//             <div className="text-4xl mb-2">🔍</div>
//             <h4 className="font-semibold text-lg">Compare Modes</h4>
//             <p className="text-gray-600">See time, cost, and emissions for each option.</p>
//           </div>
//           <div className="p-4">
//             <div className="text-4xl mb-2">✅</div>
//             <h4 className="font-semibold text-lg">Choose Your Best Fit</h4>
//             <p className="text-gray-600">Select the route that matches your goals.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer
//         className={`bg-green-100 text-center text-sm py-4 text-gray-700 transition-all duration-1500 ease-out ${
//           visible.footer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         © 2025 EcoRoute | Built for Kriyeta 4.0 Hackathon
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;






// import React from 'react';
// import cityImage from '../assets/city.jpg'; // Save the city image to your assets folder

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* Navbar */}
//       <header className="flex justify-between items-center p-6 px-12">
//         <div className="flex items-center gap-2">
//           <span className="text-green-600 text-2xl font-bold">EcoRoute</span>
//           <img src="/logo.png" alt="EcoRoute Logo" className="w-6 h-6" />
//         </div>
//         <nav className="flex gap-8 text-black font-semibold">
//           <a href="#" className="text-green-600">HOME</a>
//           <a href="#">PLAN ROUTE</a>
//           <a href="#">SAVED ROUTES</a>
//           <a href="#">HISTORY</a>
//         </nav>
//       </header>

//       {/* Main Section */}
//       <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-12 py-12">
//         {/* Left Content */}
//         <div className="max-w-xl">
//           <h1 className="text-5xl font-extrabold leading-tight mb-4">
//             MANAGE <br />
//             YOUR <br />
//             <span className="text-green-500">ROUTES !</span>
//           </h1>
//           <p className="text-lg text-gray-800 mb-6">
//             Plan <span className="text-green-500 font-semibold">eco-friendly</span> journeys effortlessly
//             with low-emission transport recommendations.
//           </p>
//           <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md">
//             GET STARTED
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="mb-10 lg:mb-0">
//           <img src={cityImage} alt="City Illustration" className="w-full max-w-md lg:max-w-xl" />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;







// import { useEffect, useState } from "react";
// import cityImage from "../assets/city.png"; // Make sure this path is correct

// const LandingPage = () => {
//   const [visible, setVisible] = useState({
//     hero: false,
//     features: false,
//     howItWorks: false,
//     footer: false,
//   });

//   useEffect(() => {
//     const timeouts = [];

//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, hero: true })), 100));
//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, features: true })), 1200));
//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, howItWorks: true })), 2400));
//     timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, footer: true })), 3600));

//     return () => timeouts.forEach(clearTimeout);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 to-blue-200 font-sans">
//       {/* New Hero Section */}
//       <section
//         className={`min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 py-12 transition-all duration-1500 ease-out ${
//           visible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         {/* Left Content */}
//         <div className="max-w-xl">
//           <h1 className="text-5xl font-extrabold leading-tight mb-4">
//             MANAGE <br />
//             YOUR <br />
//             <span className="text-green-600">ROUTES !</span>
//           </h1>
//           <p className="text-lg text-gray-800 mb-6">
//             Plan <span className="text-green-600 font-semibold">eco-friendly</span> journeys effortlessly
//             with low-emission transport recommendations.
//           </p>
//           <a
//             href="/dashboard"
//             className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition"
//           >
//             GET STARTED
//           </a>
//         </div>

//         {/* Right Image */}
//         <div className="mb-10 lg:mb-0">
//           <img src={cityImage} alt="City Illustration" className="w-full max-w-md lg:max-w-xl" />
//         </div>
//       </section>

//       {/* Feature Highlights */}
//       <section
//         className={`bg-white py-12 px-4 text-center transition-all duration-1500 ease-out ${
//           visible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         <h2 className="text-3xl font-bold text-green-800 mb-6">Why EcoRoute?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <div className="p-6 bg-green-50 rounded-lg shadow">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">🌍 Eco-Friendly Routes</h3>
//             <p className="text-gray-700">Optimize your travel to minimize carbon footprint.</p>
//           </div>
//           <div className="p-6 bg-green-50 rounded-lg shadow">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">⚡ Fast or Cheap — You Choose</h3>
//             <p className="text-gray-700">Get routes based on time or cost depending on your needs.</p>
//           </div>
//           <div className="p-6 bg-green-50 rounded-lg shadow">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">🤖 Smart Decision Engine</h3>
//             <p className="text-gray-700">Let our rule-based agent recommend the best mode of travel.</p>
//           </div>
//         </div>
//       </section>

//       {/* How it Works */}
//       <section
//         className={`bg-blue-50 py-12 px-4 text-center transition-all duration-1500 ease-out ${
//           visible.howItWorks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         <h2 className="text-3xl font-bold text-blue-800 mb-6">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <div className="p-4">
//             <div className="text-4xl mb-2">🧭</div>
//             <h4 className="font-semibold text-lg">Enter Route Details</h4>
//             <p className="text-gray-600">Source, destination, and your travel preference.</p>
//           </div>
//           <div className="p-4">
//             <div className="text-4xl mb-2">🔍</div>
//             <h4 className="font-semibold text-lg">Compare Modes</h4>
//             <p className="text-gray-600">See time, cost, and emissions for each option.</p>
//           </div>
//           <div className="p-4">
//             <div className="text-4xl mb-2">✅</div>
//             <h4 className="font-semibold text-lg">Choose Your Best Fit</h4>
//             <p className="text-gray-600">Select the route that matches your goals.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer
//         className={`bg-green-100 text-center text-sm py-4 text-gray-700 transition-all duration-1500 ease-out ${
//           visible.footer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//         }`}
//       >
//         © 2025 EcoRoute | Built for Kriyeta 4.0 Hackathon
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;





import { useEffect, useState } from "react";
import cityImage from "../assets/city.png"; // Your image
import logo from "../assets/logo.png"; // Small logo image to show beside EcoRoute

const LandingPage = () => {
  const [visible, setVisible] = useState({
    hero: false,
    features: false,
    howItWorks: false,
    footer: false,
  });

  useEffect(() => {
    const timeouts = [];

    timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, hero: true })), 100));
    timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, features: true })), 1200));
    timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, howItWorks: true })), 2400));
    timeouts.push(setTimeout(() => setVisible((v) => ({ ...v, footer: true })), 3600));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 to-blue-200 font-sans">

      {/* Navbar */}
      <header className="flex justify-between items-center p-6 px-12">
        <div className="flex items-center gap-3">
          <img src={logo} alt="EcoRoute Logo" className="w-8 h-8" />
          <span className="text-green-700 text-2xl font-bold">EcoRoute</span>
        </div>
        <nav className="flex gap-8 text-black font-semibold">
          <a href="#" className="text-green-600">HOME</a>
          <a href="#">PLAN ROUTE</a>
          <a href="#">SAVED ROUTES</a>
          <a href="#">HISTORY</a>
        </nav>
      </header>

      {/* Hero Section (New Design) */}
      <section
        className={`flex flex-col-reverse lg:flex-row items-center justify-between px-12 py-12 transition-all duration-1500 ease-out ${
          visible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left Content */}
<div className="max-w-xl flex flex-col justify-center items-start h-full text-left">
  <div className="w-full">
    <h1 className="text-5xl font-extrabold leading-tight  mb-4">
      MANAGE <br />
      YOUR <br />
      <span className="text-green-500">ROUTES !</span>
    </h1>
    <p className="text-lg text-gray-800 mb-6">
      Plan <span className="text-green-500 font-semibold">eco-friendly</span> journeys effortlessly
      with low-emission transport recommendations.
    </p>
    <a href="/dashboard">
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md">
        GET STARTED
      </button>
    </a>
  </div>
</div>


        {/* Right Image */}
        <div className="mb-10 lg:mb-0">
          <img src={cityImage} alt="City Illustration" className="w-full max-w-md lg:max-w-xl" />
        </div>
      </section>

      {/* Feature Highlights */}
      <section
        className={`bg-white py-12 px-4 text-center transition-all duration-1500 ease-out ${
          visible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl font-bold text-green-800 mb-6">Why EcoRoute?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-green-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">🌍 Eco-Friendly Routes</h3>
            <p className="text-gray-700">Optimize your travel to minimize carbon footprint.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">⚡ Fast or Cheap — You Choose</h3>
            <p className="text-gray-700">Get routes based on time or cost depending on your needs.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">🤖 Smart Decision Engine</h3>
            <p className="text-gray-700">Let our rule-based agent recommend the best mode of travel.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        className={`bg-blue-50 py-12 px-4 text-center transition-all duration-1500 ease-out ${
          visible.howItWorks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-4">
            <div className="text-4xl mb-2">🧭</div>
            <h4 className="font-semibold text-lg">Enter Route Details</h4>
            <p className="text-gray-600">Source, destination, and your travel preference.</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">🔍</div>
            <h4 className="font-semibold text-lg">Compare Modes</h4>
            <p className="text-gray-600">See time, cost, and emissions for each option.</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">✅</div>
            <h4 className="font-semibold text-lg">Choose Your Best Fit</h4>
            <p className="text-gray-600">Select the route that matches your goals.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`bg-green-100 text-center text-sm py-4 text-gray-700 transition-all duration-1500 ease-out ${
          visible.footer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        © 2025 EcoRoute | Built for Kriyeta 4.0 Hackathon
      </footer>
    </div>
  );
};

export default LandingPage;
