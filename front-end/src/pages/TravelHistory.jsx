// src/components/TravelHistory.jsx
import React from "react";

const history = [
  { id: 1, route: "Home → Gym", date: "2025-04-10", mode: "Cycle" },
  { id: 2, route: "Office → Home", date: "2025-04-11", mode: "Cab" },
  { id: 3, route: "Home → Library", date: "2025-04-12", mode: "Bus" },
  { id: 4, route: "Library → Home", date: "2025-04-12", mode: "Bus" },
  { id: 5, route: "Office → Bank", date: "2025-04-13", mode: "Cab" },
];

const TravelHistory = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-green-800 mb-4">Travel History</h2>
    <ul className="space-y-3 text-gray-700">
      {history.map((h) => (
        <li key={h.id} className="p-3 bg-white rounded-xl shadow flex justify-between">
          <div>
            <div className="font-medium">{h.route}</div>
            <div className="text-sm">{h.date}</div>
          </div>
          <div className="text-sm italic">{h.mode}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default TravelHistory;
