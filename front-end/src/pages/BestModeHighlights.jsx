import React from "react";
import { BadgeCheck } from "lucide-react";

const BestModeHighlights = ({ data }) => {
  if (!data || data.length === 0) return null;

  const fastest = data.reduce((a, b) => (a.time < b.time ? a : b));
  const cheapest = data.reduce((a, b) => (a.cost < b.cost ? a : b));
  const eco = data.reduce((a, b) => (a.emissions < b.emissions ? a : b));

  return (
    <div className="mt-10 p-6 bg-green-50 rounded-2xl shadow">
      <h3 className="text-2xl font-bold text-green-800 mb-4">Best Modes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-green-200 rounded-xl">
          <div className="flex items-center mb-2 text-green-700 font-semibold">
            <BadgeCheck className="w-5 h-5 mr-2" /> Fastest
          </div>
          <p>{fastest.name} – {fastest.time} mins</p>
        </div>
        <div className="p-4 bg-white border border-green-200 rounded-xl">
          <div className="flex items-center mb-2 text-green-700 font-semibold">
            <BadgeCheck className="w-5 h-5 mr-2" /> Cheapest
          </div>
          <p>{cheapest.name} – ₹{cheapest.cost}</p>
        </div>
        <div className="p-4 bg-white border border-green-200 rounded-xl">
          <div className="flex items-center mb-2 text-green-700 font-semibold">
            <BadgeCheck className="w-5 h-5 mr-2" /> Eco-friendliest
          </div>
          <p>{eco.name} – {eco.emissions} kg CO₂</p>
        </div>
      </div>
    </div>
  );
};

export default BestModeHighlights;
