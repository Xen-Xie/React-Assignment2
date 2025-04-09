import React from 'react';

function SecondComp() {
  return (
    <div className="flex flex-col gap-6">
      {/* Title Input */}
      <div className="flex flex-col gap-1">
        <h1 className="text-accent font-bold text-xl">Let’s give the incident a title?</h1>
        <p className="text-secondary text-sm">
          Make a title that will easily identify the incidents
        </p>
        <input
          type="text"
          placeholder="Add title here"
          className="mt-2 p-3 rounded-md bg-[#F4F4F5] text-sm placeholder-secondary ring-2 ring-[#E4E4E7] focus:ring-primary/55"
        />
      </div>

      {/* Description Input */}
      <div className="flex flex-col gap-1">
        <h1 className="text-accent font-bold text-xl">Describe what happened during the incident?</h1>
        <p className="text-secondary text-sm">
          Share some information about the incident. The when, where, how.
        </p>
        <textarea
          placeholder="Type here"
          className="mt-2 p-3 rounded-md bg-[#F4F4F5] text-sm placeholder-secondary ring-2 ring-[#E4E4E7] h-40 resize-none focus:ring-primary/55"
        />
      </div>
    </div>
  );
}

export default SecondComp;
