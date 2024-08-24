//src/components/ProfileCard.tsx
import React from "react";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const ProfileCard = async () => {
  // userId from Clerk Auth client
  const { userId } = auth();
  // check userId
  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  console.log(userId);

  //check for user
  if (!user) return null;

  return (
    <>
      <div className='flex flex-col gap-6 bg-white rounded-lg shadow-md text-sm'>
        <div className='relative h-20'>
          <Image
            // src='https://images.pexels.com/photos/641559/pexels-photo-641559.jpeg?auto=compress&cs=tinysrgb&w=600'
            src={user?.coverPic || "/noCover.png"}
            alt='profile picture'
            className='rounded-md object-cover'
          />
          <Image
            //src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
            src={user.avatar || "/noAvatar.png"}
            alt='profile ikon'
            width={40}
            height={40}
            className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'
          />
        </div>
        {/* USERNAME AND LINKS AND FOLLOWERS */}
        <div className='flex flex-col items-center h-20 gap-2'>
          {/* <span className='font-semibold'>Aki-Mai</span> */}
          <span className='font-semibold'>
            {user.firstName && user.lastName
              ? user.firstName + " " + user.lastName
              : user.username}
          </span>
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
        <span className='text-xs text-gray-500'>
          {user._count.followers} Followers
        </span>
      </div>
      <button className='bg-blue-500 text-white text-xs p-2 rounded-s-md'>
        My Profile
      </button>
    </>
  );
};

export default ProfileCard;
