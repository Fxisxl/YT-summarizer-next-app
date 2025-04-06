import Chat from "@/src/components/Chat";
import ChatInput from "@/src/components/ChatInput";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const ChatPage = ({ params: { id } }: Props) => {
  console.log("ChatPage this is printing from chat[id]", id); 
  return (
    <div className="flex flex-col justify-center h-[100%] p-5 overflow-hidden">
      <div className="flex-1 overflow-y-scroll pt-10 md:pt-5">
        <Chat id={id} />
      </div>
      <ChatInput id={id} />    
    </div>
  );   // passing the id prop to ChatInput component
};

export default ChatPage;
