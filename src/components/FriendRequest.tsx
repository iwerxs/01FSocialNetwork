import React from "react";
import Link from "next/link";
import Image from "next/image";

const FriendRequest = () => {
  return (
    <>
      <div className='p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4'>
        {/* TOP SECTION */}
        <div className='flex items-center justify-between font-medium'>
          <span className='text-gray-500'>Friend Request</span>
          <Link href='/' className='text-blue-500 text-sm'>
            See all
          </Link>
        </div>
        {/* USER SECTION */}
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
            <Image
              src='/accept.png'
              width={20}
              height={20}
              alt='accept'
              className='cursor-pointer'
            />
            <Image
              src='/reject.png'
              width={20}
              height={20}
              alt='accept'
              className='cursor-pointer'
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src='https://images.pexels.com/photos/1975342/pexels-photo-1975342.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Adele'
              width={40}
              height={40}
              className='w-10 h-10 rounded-full object-cover'
            />
            <span className='font-semibold'>Adele</span>
          </div>
          <div className='flex gap-3 justify-end'>
            <Image
              src='/accept.png'
              width={20}
              height={20}
              alt='accept'
              className='cursor-pointer'
            />
            <Image
              src='/reject.png'
              width={20}
              height={20}
              alt='accept'
              className='cursor-pointer'
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src='ttps://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Adam'
              width={40}
              height={40}
              className='w-10 h-10 rounded-full object-cover'
            />
            <span className='font-semibold'>Adam</span>
          </div>
          <div className='flex gap-3 justify-end'>
            <Image
              src='/accept.png'
              width={20}
              height={20}
              alt='accept'
              className='cursor-pointer'
            />
            <Image
              src='/reject.png'
              width={20}
              height={20}
              alt='accept'
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
