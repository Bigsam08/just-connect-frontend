/**
 * @description Responsive Floating Chatbot Button
 */

import { useState, useEffect, useRef } from "react";
import { FaTimes, FaRobot } from "react-icons/fa";

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);

  const greetedRef = useRef(false); // Track if greeting sent
  const messagesEndRef = useRef(null);

  const date = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Prevent background scrolling when chat is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Show initial greeting once
  useEffect(() => {
    if (!open || greetedRef.current) return;

    greetedRef.current = true;

    const timer = setTimeout(() => {
      setBotTyping(true);
      setMessages([
        {
          type: "bot",
          text: "Hello! 👋 Welcome to our platform. How may I help you today?",
        },
      ]);
      setBotTyping(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [open]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const totalMessages = messages.length + 1; // include this new message

    let botReply = "";
    if (totalMessages === 1) {
      botReply = "";
    } else if (totalMessages === 2) {
      botReply = "Please reach us on WhatsApp at +234XXXXXXXXX. Thank you!";
    } else if (totalMessages === 3 ) {
      botReply =
        "Our support team will reply shortly. Feel free to leave your message.";
    }

    if (botReply) {
      setBotTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
        setBotTyping(false);
      }, 800);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-brand hover:bg-brand-hover text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chat Box */}
      {open && (
        <div
          className={`fixed bottom-0 md:bottom-24 right-0 md:right-6 w-full sm:w-96 h-full md:h-[50vh] bg-white rounded-t-xl md:rounded-xl shadow-lg z-50 flex flex-col`}
        >
          {/* Header */}
          <div className="bg-brand text-white p-4 flex justify-between items-center rounded-t-xl md:rounded-b-4xl h-20 md:h-28">
            <div className="flex flex-col flex-1">
              <span className="font-medium text-center">Chat with us</span>
              <span className="flex items-center justify-center gap-1 text-xs mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Online • Mon-Sat 9am-6pm
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-brand-hover p-1 rounded transition"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-2">
            <p className="text-xs font-bold text-gray-700 text-center mb-2">
              {formattedDate}
            </p>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl max-w-xs wrap-break-words text-xs md:text-sm ${
                  msg.type === "user"
                    ? "bg-brand text-white self-end text-right"
                    : "bg-gray-100 self-start text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing indicator */}
            {botTyping && (
              <div className="bg-gray-100 self-start text-left p-2 rounded-xl max-w-xs">
                <span className="animate-pulse">Bot is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-lg transition"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
