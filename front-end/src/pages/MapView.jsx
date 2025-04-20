// after implementing the local storage

import React, { useState, useEffect } from "react";
  import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    useMapEvent,
  } from "react-leaflet";
  import axios from "axios";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  // Fix leaflet default marker path issues
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  });
  
  // Custom icons
  const userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    iconSize: [32, 32],
  });
  
  const destinationIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
  });
  
  const MapView = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [routeCoords, setRouteCoords] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // Fetch user location
    useEffect(() => {
      if (!navigator.geolocation) {
        alert("Geolocation not supported");
        const defaultLocation = [22.82146260696125, 75.94304647827504];
        setUserLocation(defaultLocation);
        localStorage.setItem("startCoords", defaultLocation.join(","));
        setLoading(false);
        return;
      }
      
      // get user geolocation
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coords = [latitude, longitude];
          setUserLocation(coords);
          localStorage.setItem("startCoords", coords.join(","));
          setLoading(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          const fallback = [20.5937, 78.9629];
          setUserLocation(fallback);
          localStorage.setItem("startCoords", fallback.join(","));
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    }, []);
  
    useEffect(() => {
      const fetchRoute = async () => {
        if (!userLocation || !destination) return;
  
        try {
          const apiKey = process.env.open_source_api;
          const response = await axios.get("https://api.openrouteservice.org/v2/directions/driving-car", {
            params: {
              api_key: apiKey,
              start: `${userLocation[1]},${userLocation[0]}`,
              end: `${destination[1]},${destination[0]}`,
            },
          });
  
          const coordinates = response.data.features[0].geometry.coordinates;
          const latLngs = coordinates.map(([lng, lat]) => [lat, lng]);
          setRouteCoords(latLngs);
        } catch (err) {
          console.error("Error fetching route:", err);
          alert("Unable to fetch route. Please try again.");
        }
      };
  
      fetchRoute();
    }, [userLocation, destination]);
    
    //handle user start location by dragging marker point
    const handleUserMarkerDrag = (e) => {
      const { lat, lng } = e.target.getLatLng();
      const coords = [lat, lng];
      setUserLocation(coords);
      localStorage.setItem("startCoords", coords.join(","));
      setRouteCoords([]);
    };
    
    //set coordinates in local storage from map
    const ClickHandler = () => {
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
    };
  
    if (loading || !userLocation) return <div style={{ padding: 20 }}>🌍 Loading map...</div>;
  
    return (
      <MapContainer center={userLocation} zoom={15} style={{ height: "100vh", width: "100%",border: "2px solid black", borderRadius: "10px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        <ClickHandler />
  
        {userLocation && (
          <Marker
            position={userLocation}
            icon={userIcon}
            draggable
            eventHandlers={{ dragend: handleUserMarkerDrag }}
          >
            <Popup>Your Location</Popup>
          </Marker>
        )}
  
        {destination && (
          <Marker position={destination} icon={destinationIcon}>
            <Popup>Destination</Popup>
          </Marker>
        )}
  
        {routeCoords.length > 0 && (
          <Polyline positions={routeCoords} color="blue" weight={4} />
        )}
      </MapContainer>
    );
  };
  
  export default MapView;
