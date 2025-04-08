import React from 'react';
import { Camera, Image, Paperclip } from 'lucide-react';
import Button from './Button';
import { cn } from '../../lib/utlities';

function ChatBox({className}) {
  return (
    <div className={cn("w-full max-w-sm mx-auto rounded-xl shadow-sm overflow-hidden bg-[#F4F4F5] flex flex-col z-50",className)}>
      {/* Header */}
      <div className="bg-primary text-white px-4 py-5 font-semibold text-lg rounded-t-xl">
        Chat with Cypher
      </div>

      {/* Messages */}
      <div className="p-4 space-y-2 h-[400px] overflow-y-auto flex flex-col">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-[#3F3F46] text-white p-3 rounded-xl max-w-[75%] text-sm">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>

        {/* Bot messages */}
        <div className="flex justify-start">
          <div className="bg-[#F4F4F5] text-[#3F3F46] p-3 rounded-xl max-w-[75%] text-sm border border-[#E4E4E7]">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[#F4F4F5] text-[#3F3F46] p-3 rounded-xl max-w-[75%] text-sm border border-[#E4E4E7]">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>

        {/* Another user message */}
        <div className="flex justify-end">
          <div className="bg-[#27272A] text-white p-3 rounded-xl max-w-[75%] text-sm">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
      </div>

      {/* Input Field */}
      <div className="px-4 py-3">
        <input
          type="text"
          placeholder="Enter your question..."
          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/65 text-sm placeholder-secondary bg-[#F3F4F6]"
        />
      </div>

      {/* Icons + Send button */}
      <div className="px-4 pb-3 pt-2 flex items-center justify-between">
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
