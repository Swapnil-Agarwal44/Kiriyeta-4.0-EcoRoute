import React, { useState } from "react";
// feature for voice search 
const VoiceSearch = ({ onResult }) => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
      setTranscript("Listening...");
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      setListening(false);

      // Parse result: "Go to MG Road with eco-friendly option"
      const parsed = parseVoiceInput(result);
      onResult(parsed);
    };

    recognition.onerror = () => {
      setListening(false);
      setTranscript("Error occurred while listening");
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };
 
  //funciton to parse voice input
  const parseVoiceInput = (input) => {
    const preferenceKeywords = {
      fastest: ["fastest", "quick", "least time"],
      cheapest: ["cheapest", "low cost", "save money"],
      eco: ["eco", "eco-friendly", "green", "low emission"],
    };

    let preference = "fastest"; // default
    if (preferenceKeywords.cheapest.some((w) => input.toLowerCase().includes(w))) {
      preference = "cheapest";
    } else if (preferenceKeywords.eco.some((w) => input.toLowerCase().includes(w))) {
      preference = "eco";
    }

    // Extract destination (assume last word or phrase after "to")
    const destinationMatch = input.match(/to (.+)/i);
    const destination = destinationMatch ? destinationMatch[1] : "";

    return {
      destination: destination.trim(),
      preference,
      rawText: input,
    };
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <button
        onClick={handleVoiceSearch}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        {listening ? "Listening..." : "Start Voice Search"}
      </button>
      <p className="mt-2 text-sm text-gray-600">{transcript}</p>
    </div>
  );
};

export default VoiceSearch;