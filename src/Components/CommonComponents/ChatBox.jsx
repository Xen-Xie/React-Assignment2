import React from 'react';
import { Camera, Image, Paperclip } from 'lucide-react';
import Button from './Button';

function ChatBox() {
  return (
    <div className="w-[350px] rounded-xl shadow-sm overflow-hidden bg-[#F4F4F5] flex flex-col z-50">
      {/* Header */}
      <div className="bg-primary text-white px-4 py-5 font-semibold text-lg rounded-t-xl">
        Chat with Cypher
      </div>

      {/* Messages */}
      <div className="p-4 space-y-2 h-[400px] overflow-y-auto flex flex-col bg-white">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-[#3F3F46] text-white p-3 rounded-xl max-w-[75%] text-sm">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>

        {/* Bot message */}
        <div className="flex justify-start">
          <div className="bg-[#F4F4F5] text-secondary p-3 rounded-xl max-w-[75%] text-sm border-[#E4E4E7] border">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>

        {/*bot message */}
        <div className="flex justify-start">
          <div className="bg-[#F4F4F5] text-secondary p-3 rounded-xl max-w-[75%] text-sm border-[#E4E4E7] border">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>

        {/* user message */}
        <div className="flex justify-end">
          <div className="bg-[#27272A] text-white p-3 rounded-xl max-w-[75%] text-sm">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
      </div>

      {/* Input field */}
      <div className="px-4 py-3 bg-white">
        <input
          type="text"
          placeholder="Enter your question..."
          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/75 text-sm placeholder-secondary caret-secondary"
        />
      </div>

      {/* Icons + Send button */}
      <div className="px-4 pb-3 pt-2 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4 text-secondary">
          <Camera className="w-5 h-5 cursor-pointer hover:text-tertiary transition-colors duration-150" />
          <Image className="w-5 h-5 cursor-pointer hover:text-tertiary transition-colors duration-150" />
          <Paperclip className="w-5 h-5 cursor-pointer hover:text-tertiary transition-colors duration-150" />
        </div>
        <Button className='rounded-full w-[110px] font-extralight'>Send</Button>
      </div>
    </div>
  );
}

export default ChatBox;
