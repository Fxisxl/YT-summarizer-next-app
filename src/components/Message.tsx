import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css"; // code block style for PDF too!

interface Props {
  message: DocumentData;
}

const Message = ({ message }: Props) => {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className="py-5 text-white break-words">
      <div className="flex space-x-3 md:space-x-5">
        <div className="w-9 h-9 border border-gray-600 rounded-full overflow-hidden">
          <Image
            src={message?.user?.avatar}
            alt="userImage"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`flex flex-col max-w-2xl ${isChatGPT ? "items-start" : "items-end"}`}>
          <div
            className={`prose prose-invert max-w-none text-base tracking-wide whitespace-pre-wrap ${
              isChatGPT ? "bg-[#2F2F2F30]" : "bg-[#2F2F2F]"
            } px-4 py-2 rounded-lg shadow-sm`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" className="underline text-blue-400" />
                ),
              }}
            >
              {message?.text}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
