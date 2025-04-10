import React from 'react';
import { ActivitiesItems } from '../../lib/reuse/ActivitiesItems';

function Activities() {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-accent font-semibold text-lg">Activities</h1>
        <a href="#" className="underline text-accent font-semibold text-sm">
          See all
        </a>
      </div>
      <div className="flex flex-col gap-4">
        {ActivitiesItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center bg-[#F4F4F5] p-4 rounded-2xl gap-4  hover:bg-[#F4F4F5]/65 hover:scale-105 transition-all duration-300 cursor-pointer"
          >

            <div className="w-[64px] h-[64px] sm:w-[64px] sm:h-[64px] rounded-md overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={item.image}
                alt="Activity"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col text-center sm:text-left justify-center">
              <h2 className="text-base font-semibold text-[#0F0F0F]">
                {item.title}
              </h2>
              <div className="flex justify-center sm:justify-start flex-wrap items-center text-sm text-[#71717A] gap-1">
                <span>{item.locationName}</span>
                <span className="text-xl leading-none">•</span>
                <span>{item.cordinate}</span>
              </div>
              <p className="text-base font-semibold text-[#0F0F0F] mt-1">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
