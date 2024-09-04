//src/app/profile/[username]/page.tsx
import React from "react";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import Image from "next/image";
import prisma from "@/lib/client";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        followers: true,
        following: true,
        posts: true,
      },
    },
  });
  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;
  if (currentUserId) {
    const resp = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });
    if (resp) isBlocked = true;
  } else {
    isBlocked = false;
  }
  if (isBlocked) return notFound();

  return (
    <>
      <div className='flex gap-6'>
        <div className='hidden xl:block w-[20%]'>
          <LeftMenu type='profile' />
        </div>
        <div className='w-full lg:w-[70%] xl:w-[50%]'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col items-center justify-center'>
              <div className='w-full h-64 relative'>
                <Image
                  src={user.coverPic || "/noCover.png"}
                  alt='profile hero'
                  fill
                  className='rounded-md object-cover'
                />
                <Image
                  src={user.avatar || "/noAvatar.png"}
                  alt='profile image'
                  width={128}
                  height={128}
                  className='w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 rounded-full ring-4 ring-white object-cover'
                />
              </div>
              {/* <h1 className='mt-20 mb-4 text-2xl font-medium'>Mya Davies</h1> */}
              <h1 className='mt-20 mb-4 text-2xl font-medium'>
                {user.firstName && user.lastName
                  ? user.firstName + " " + user.lastName
                  : user.username}
              </h1>
              <div className='flex items-center justify-center gap-12 mb-4'>
                <div className='flex flex-col items-center'>
                  {/* <span className='font-medium'>321</span> */}
                  <span className='font-medium'>{user._count.posts}</span>
                  <span className='text-sm'>Posts</span>
                </div>
                <div className='flex flex-col items-center'>
                  {/* <span className='font-medium'>1.1k</span> */}
                  <span className='font-medium'>{user._count.followers}</span>
                  <span className='text-sm'>Followers</span>
                </div>
                <div className='flex flex-col items-center'>
                  {/* <span className='font-medium'>987</span> */}
                  <span className='font-medium'>{user._count.following}</span>
                  <span className='text-sm'>Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className='hidden lg:block w-[30%]'>
          {/* <RightMenu userId='testUsr' /> */}
          <RightMenu user={user} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
