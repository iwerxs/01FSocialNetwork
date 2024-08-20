//src/components/ProfileCard.tsx
import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <>
      <div className='flex flex-col gap-6 bg-white rounded-lg shadow-md text-sm'>
        <div className='relative h-20'>
          <Image
            src='https://images.pexels.com/photos/641559/pexels-photo-641559.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='profile picture'
            className='rounded-md object-cover'
          />
          <Image
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='profile ikon'
            width={40}
            height={40}
            className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'
          />
        </div>
        {/* USERNAME AND LINKS AND FOLLOWERS */}
        <div className='flex flex-col items-center h-20 gap-2'>
          <span className='font-semibold'>Aki-Mai</span>
        </div>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='cirle'
            width={12}
            height={12}
            className='w-3 h-3 rounded-full object-cover'
          />
          <Image
            src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='cirle'
            width={12}
            height={12}
            className='w-3 h-3 rounded-full object-cover'
          />
          <Image
            src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='cirle'
            width={12}
            height={12}
            className='w-3 h-3 rounded-full object-cover'
          />
        </div>
        <span className='text-xs text-gray-500'>369 Followers</span>
      </div>
      <button className='bg-blue-500 text-white text-xs p-2 rounded-s-md'>
        My Profile
      </button>
    </>
  );
};

export default ProfileCard;
