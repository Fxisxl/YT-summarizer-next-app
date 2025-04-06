"use client";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession(); // getting session data from next auth
  //console.log(session); // logging user email
  

  const createNewChat = async () => { // function to create new chat
    const doc = await addDoc(
      // creating new chat id in firebase and will send this id to api 
      collection(db, "users", session?.user?.email as string, "chats"),
      {
        userId: session?.user?.email as string,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc?.id}`);  // this is the new chat id that i will be using as chat session id while making api calls to FastAPI
  };
  return (
    <button
      onClick={createNewChat}  // calling createNewChat function on button click
      className="flex items-center justify-center gap-2 text-xs md:text-base border border-primary-foreground/10 w-full rounded-md px-2 py-1 hover:bg-primary-foreground/10 duration-300 ease-in-out"
    >
      <FaPlus /> New Chat
    </button>
  );
};

export default NewChat;
