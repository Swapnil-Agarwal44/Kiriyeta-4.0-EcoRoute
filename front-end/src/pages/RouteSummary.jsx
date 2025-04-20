// src/components/RouteSummary.jsx
import React from "react";

const RouteSummary = ({ from, to, distance, time, baselineCO2 }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6 flex flex-wrap justify-between items-center">
      <div className="text-center sm:text-left">
        <div className="text-gray-500 text-sm">Route</div>
        <div className="font-semibold text-lg">{from} → {to}</div>
      </div>
      <div className="text-center sm:text-left">
        <div className="text-gray-500 text-sm">Distance</div>
        <div className="font-semibold text-lg">{distance}</div>
      </div>
      <div className="text-center sm:text-left">
        <div className="text-gray-500 text-sm">Time</div>
        <div className="font-semibold text-lg">{time} mins</div>
      </div>
      <div className="text-center sm:text-left">
        <div className="text-gray-500 text-sm">Baseline CO₂</div>
        <div className="font-semibold text-lg">{baselineCO2}</div>
      </div>
    </div>
  );
};

export default RouteSummary;
