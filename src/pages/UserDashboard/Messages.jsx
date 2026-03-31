/**
 * @description We build a message component that displays all messages with professionals
 *              - A click will navigate to the chat page with a dynamic chat id to chat directly with the professional
 */


import { useNavigate } from "react-router-dom";

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

const Messages = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl">
      {/** Header */}
      <div
        className="bg-brand px-4 py-6 rounded-2xl mb-4 text-brand-white"
        data-aos="fade"
      >
        <h1 className="text-xl font-semibold text-brand-white">Messages</h1>
        <p className="text-gray-200 text-sm">See your conversations</p>
      </div>

      {conversations.map((chat) => (
        <div
          key={chat.id}
          onClick={() => navigate(`/dashboard/user/messages/${chat.id}`)}
          className="flex items-center gap-3 p-4 border-b border-gray-200 cursor-pointer"
        >
          <img src={chat.img} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium">{chat.name}</p>
            <p className="text-sm text-gray-500">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
