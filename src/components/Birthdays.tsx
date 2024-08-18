import React from "react";
import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <>
      <div className='p-4 bg-white shadow-md rounded-lg text-sm'>
        {/* TOP */}
        <div className='flex justify-between items-center font-medium'>
          <span className='text-gray-500'>Birthdays</span>
        </div>
        {/* USER */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src='https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Joellelyn'
              width={40}
              height={40}
              className='w-10 h-10 rounded-full object-cover'
            />
            <span className='font-semibold'>Joellelyn</span>
          </div>
          <div className='flex gap-3 justify-end'>
            <button bg-blue-500 text-white text-sm py-1 px-2 rounded-md>
              Let&apos;s Celebrate
            </button>
          </div>
        </div>
        {/* UPCOMING BIRTHDAYS */}
        <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
          <Image src='/gift.png' alt='gift' width={24} height={24} />
          <Link href='/' className='flex flex-col gap-1 text-xs'>
            <span className='text-gray-700 font-semibold'>
              Upcoming Birthdays
            </span>
            <span className='text-gray-500'>See other upcoming Birthdays</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Birthdays;
