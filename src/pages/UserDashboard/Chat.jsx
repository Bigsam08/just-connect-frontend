/**
 * @description A seperate chat page dynamically to display conversation between user and an artisan
 */

import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";


const conversations = [
  {
    id: 1,
    name: "John Electrician",
    lastMessage: "I’ll be there tomorrow",
    img: "https://i.pravatar.cc/100?img=10",
  },
  {
    id: 2,
    name: "Mary Plumber",
    lastMessage: "Send location please",
    img: "https://i.pravatar.cc/100?img=12",
  },
];

const messagesData = {
  1: [
    { from: "them", text: "Hello 👋" },
    { from: "me", text: "Hi, I need help with wiring" },
  ],
  2: [{ from: "them", text: "Send location please" }],
};


const Chat = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const chat = conversations.find((c) => c.id === Number(id));
  const chatMessages = messagesData[id] || [];

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200">
        <button onClick={() => navigate(-1)} className="text-brand hover:opacity-70 cursor-pointer transition-all">
          <ArrowLeft />
        </button>
        <img src={chat.img} className="w-8 h-8 rounded-full" />
        <h2 className="font-semibold">{chat.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
              msg.from === "me"
                ? "bg-black text-white self-end"
                : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-200 bg-white rounded-lg px-3 py-2 outline:0 focus:border-orange-500"
        />
        <button type="button" className="bg-green-500 hover:bg-green-600 transition-colors text-brand-white cursor-pointer text-sm px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
