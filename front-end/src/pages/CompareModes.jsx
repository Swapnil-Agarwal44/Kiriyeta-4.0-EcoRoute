// after connecting the front end and backend for dynamically assigning the values: 

import React, { useEffect, useState } from "react";
import { Bike, Train, Car } from "lucide-react";
import RouteSummary from "./RouteSummary";
import CompareChart from "./CompareChart";
import BestModeHighlights from "./BestModeHighlights";
import axios from "axios";

const iconMap = {
  Cycle: Bike,
  Bus: Train,
  Cab: Car,
};


const CompareModes = () => {
  const [modes, setModes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [routeDetails, setRouteDetails] = useState(null);
  const [error, setError] = useState(null);
  const [time , settime] = useState(null);
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    const fetchModes = async () => {
      try {
        console.log(localStorage.getItem("startCoords"));
        console.log(localStorage.getItem("endCoords"));
        // const start = JSON.parse(localStorage.getItem("startCoords"));
        // const end = JSON.parse(localStorage.getItem("endCoords"));

        const start = {
          "lat": localStorage.getItem("startCoords").split(",")[0],
          "lng" : localStorage.getItem("startCoords").split(",")[1]
        }

        const end = {
          "lat": localStorage.getItem("endCoords").split(",")[0],
          "lng" : localStorage.getItem("endCoords").split(",")[1]
        }
        if (!start || !end) {
          throw new Error("Start or end coordinates not found in localStorage.");
        }

        const res = await axios.post("http://192.168.137.249:5000/api/compare-modes", {
          start,
          end
        });

        const { from, to, distance, modes } = res.data;

        const cleaned = modes.map(mode => ({
          name: mode.name,
          time: parseFloat(mode.time), // Removes " mins"
          cost: parseFloat(mode.cost.replace("₹", "")),
          emissions: parseFloat(mode.emissions)
        }));
        console.log(cleaned);
        setFormattedData(cleaned);

        settime((parseInt(distance.split(" ")[0]) / 40) * 60) ;
        setRouteDetails({ from, to, distance });
        setModes(modes);
      } catch (err) {
        setError(err.message || "Failed to fetch route comparison data.");
        console.error("CompareModes fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchModes();
  }, []);

  if (loading) return <div className="p-6 text-gray-600">Loading travel modes...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6">
      {/* Route Summary Header */}
      <RouteSummary
        // from={routeDetails?.from || "N/A"}
        // to={routeDetails?.to || "N/A"}
        
        distance={routeDetails?.distance || "N/A"}
        time= {time}// Optional: add overall average time if needed
        baselineCO2="0 kg"
      />
{routeDetails.distance}
      {/* Mode Cards */}
      <h2 className="text-3xl font-bold text-green-800 mb-4">Compare Modes of Travel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {modes.map(({ name, time, cost, emissions }) => {
          const Icon = iconMap[name] || Bike;
          return (
            <div
              key={name}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <ul className="space-y-6 text-gray-700">
                <li><span className="font-medium">Time:</span> {time}</li>
                <li><span className="font-medium">Cost:</span> {cost}</li>
                <li><span className="font-medium">CO₂:</span> {emissions}</li>
              </ul>
            </div>
          );
        })}
      </div>

      {/* <CompareChart modes={modes} /> */}
      <CompareChart data={formattedData} />
      <BestModeHighlights data={formattedData} />
    </div>
  );
};

export default CompareModes;