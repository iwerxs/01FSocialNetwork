//src/compnents/leftMenu/Advert.tsx
import React from "react";
import Image from "next/image";

const Advert = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <>
      <div className='p-4 bg-white shadow-md rounded-lg text-sm'>
        {/* TOP SECTION */}
        <div className='flex items-center justify-between text-gray-500 font-medium'>
          <span className=''>Sponsored Advert</span>
          <Image src='/more.png' width={16} height={16} alt='more' />
        </div>
        {/* BOTTOM SECTION */}
        <div
          className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
          <div
            className={`relative w-full ${
              size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
            }`}>
            <Image
              src='https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='advert'
              fill
              className='rounded-lg object-cover'
            />
          </div>
          <div className='flex items-center gap-4'>
            <Image
              src='https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='advert'
              width={24}
              height={24}
              className='rounded-full w-6 h-6 object-cover'
            />
            <span className='font-medium text-blue-500'>Field of Dreams</span>
          </div>
          <p className={size === "sm" ? "text-xs" : "text-sm"}>
            {size === "sm"
              ? "This has only eight words Field of Dreams"
              : size === "md"
              ? "This sentence has more that eight words, join the Field of Dreams"
              : "This is the longest sentence which has fourteen words, join the Field of Dreams"}
          </p>
          <button className='bg-gray-200 text-blue-500 p-2 rounded-lg'>
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Advert;
