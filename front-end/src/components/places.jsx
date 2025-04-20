// components/PlacesAutocompleteInput.jsx
import { useState, useRef, useEffect } from "react";

const PlacesAutocompleteInput = ({ onSelectPlace }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  // hook for google map api for auto completion
  useEffect(() => {
    if (!window.google || !window.google.maps) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["geocode"], // or use ['establishment'] for POIs
    });

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const locationData = {
          name: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        //   id: place.place_id
        };
        setInputValue(place.formatted_address);
        onSelectPlace(locationData);
        // console.log(locationData.id);
      }
    });
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      className="p-3 rounded-xl border w-full shadow-sm focus:ring-2 focus:ring-green-500"
      placeholder="Enter location"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default PlacesAutocompleteInput;