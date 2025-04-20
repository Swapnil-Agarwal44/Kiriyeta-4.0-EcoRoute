import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]); // no system prompt here
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  const SYSTEM_PROMPT = {
    role: "user", // can be changed to "system" if your backend uses role logic
    content:
      "You are a chatbot included in a web application. The application helps users find routes on the map based on user preference, including cost, time, and CO2 emissions. Answer each question in a very precise and concise manner without needing to ask again and again ."
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const userText = input.trim();
    if (!userText) return;

    // 1. Add user message to UI
    setMessages((msgs) => [...msgs, { from: "user", text: userText }]);
    setInput("");

    try {
      // 2. Call backend
      const res = await fetch("http://192.168.137.249:5000/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "gemini-2.0-flash",
          messages: [
            SYSTEM_PROMPT,
            ...messages.map((m) => ({
              role: m.from === "user" ? "user" : "assistant",
              content: m.text
            })),
            { role: "user", content: userText }
          ]
        })
      });

      const json = await res.json();
      const botReply = json.reply || "Sorry, I didn't understand that.";

      // 3. Append bot reply to UI
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
    } catch (err) {
      console.error(err);
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Oops—something went wrong. Please try again." }
      ]);
    }
  };

  return (
    <div className="w-150 max-w-md mx-auto absolute h-30vh overflow-hidden left-80 top-150 bg-white shadow-lg rounded-2xl flex flex-col">
      {/* Chat messages */}
      <div className="p-4 flex-1 overflow-y-auto space-y-3 ">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.from === "user" ? "text-right" : "text-left"}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                m.from === "user"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input form */}
      <form onSubmit={sendMessage} className="p-4 border-t flex">
        <input
          className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
          placeholder="Ask me about routes…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
