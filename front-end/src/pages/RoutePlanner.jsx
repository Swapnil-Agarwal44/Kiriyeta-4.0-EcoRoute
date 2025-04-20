import React from "react";
import MapView from "./MapView";
import { useState } from "react";
import VoiceSearch from "@/components/ui/VoiceSearch";
import PlacesAutocompleteInput from "@/components/places";
import { redirect } from "react-router-dom";
import CompareModes from "./CompareModes";
import Chatbot from "./chatbot"
// import MyMapComponent from "../components/ui/gmap"
const handleVoiceResult = (data) => {
  console.log("Voice Search Result:", data);
};
//function to get routes between the starting and ending points
const getRouteHandler = (e) =>{
  useMapEvent("click", (e) => {
          const { lat, lng } = e.latlng;
          if (destination) {
            setDestination(null);
            localStorage.removeItem("endCoords");
            setRouteCoords([]);
          } else {
            const coords = [lat, lng];
            setDestination(coords);
            localStorage.setItem("endCoords", coords.join(","));
          }
        });
        return null;
}

const getRoute = ()=>{
  setDestination([toLocation.lat , toLocation.lng])
}

// function for input form to take location inputs
const RoutePlanner = () => {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
    return <div className="p-6 flex flex-col h-full">
    <h2 className="text-3xl font-bold text-green-800 mb-6">Plan Your Route</h2>
    <div className="flex flex-1 gap-6">
      <div className="w-1/2 space-y-4">
      <div className="space-y-4">
      <PlacesAutocompleteInput onSelectPlace={(data) => setFromLocation(data)} />
      <PlacesAutocompleteInput onSelectPlace={(data) => setToLocation(data)} />
      <pre className="text-sm">
        From: {JSON.stringify(fromLocation, null, 2)}
        {"\n"}
        {/* data: {toLocation.lat} */}
        
        To: {JSON.stringify(toLocation, null, 2)}
      </pre>

    </div>
        <select className="p-3 rounded-xl border w-full shadow-sm focus:ring-2 focus:ring-green-500">
          <option value="eco">Eco-Friendly</option>
          <option value="fast">Fastest</option>
          <option value="cheap">Cheapest</option>
        </select>
        <VoiceSearch onResult={handleVoiceResult}/>
        <div className="flex items-center gap-4">
          <button onClick = {getRouteHandler} className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 shadow-md" >
            Get Route
          </button>
          <span className="text-gray-500 italic">*Interactive map enabled</span>
        </div>
      </div>
      <div className="flex-1 rounded-xl overflow-hidden shadow-md h-full">

      <MapView />

      </div>
        {/* <MyMapComponent/>/ */}
    </div>
    
  
    <Chatbot/>
  </div>
      
};

export default RoutePlanner;


