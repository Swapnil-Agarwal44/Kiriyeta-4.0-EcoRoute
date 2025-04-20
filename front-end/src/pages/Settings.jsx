// src/components/Settings.jsx
import React from "react";

const Settings = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-green-800 mb-4">Settings</h2>
    <div className="space-y-4 text-gray-700">
      <div>
        <label className="block font-medium">Default Mode</label>
        <select className="mt-1 p-2 border rounded-lg w-full">
          <option>Eco-Friendly</option>
          <option>Fastest</option>
          <option>Cheapest</option>
        </select>
      </div>
      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  </div>
);

export default Settings;
