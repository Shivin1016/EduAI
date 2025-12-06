import { useState } from "react";

export default function AIChatBox() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi 👋, how can I help you learn today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Read API key from .env
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const sendToGemini = async (userMessage) => {
     const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      }),
    }
  );

    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error: No response";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "ai", text: "Processing..." },
    ]);

    setLoading(true);
    const geminiReply = await sendToGemini(userText);

    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = { role: "ai", text: geminiReply };
      return updated;
    });

    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow h-[500px] flex flex-col">
      <h2 className="text-lg font-semibold mb-2">🤖 AI Tutor</h2>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4 p-2">
        {messages.map((m, i) => (
          <p
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              m.role === "ai"
                ? "bg-blue-100 text-blue-800 self-start"
                : "bg-gray-200 dark:bg-gray-700 self-end"
            }`}
          >
            {m.text}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 border rounded-xl px-3 py-2 dark:bg-gray-800 dark:text-white"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

