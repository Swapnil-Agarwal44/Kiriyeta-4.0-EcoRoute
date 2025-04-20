// src/components/CompareChart.jsx
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { mode: "Bike", time: 25, cost: 30, emissions: 0.2 },
//   { mode: "Metro", time: 15, cost: 20, emissions: 0.1 },
//   { mode: "Cab", time: 12, cost: 100, emissions: 1.5 },
// ];

// const CompareChart = () => (
//   <div className="mt-10 p-4 bg-white rounded-2xl shadow">
//     <h3 className="text-xl font-bold text-gray-800 mb-4">Mode Comparison Chart</h3>
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="mode" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="time" fill="#34d399" name="Time (mins)" />
//         <Bar dataKey="cost" fill="#60a5fa" name="Cost (₹)" />
//         <Bar dataKey="emissions" fill="#f87171" name="CO₂ (kg)" />
//       </BarChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default CompareChart;






import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';

const CompareModesCharts = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Travel Time (mins)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="time" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Cost (₹)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "Rupees", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="cost" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Emissions (kg)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "Kilograms", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="emissions" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompareModesCharts;

