//src/components/UserInfoCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";

// const UserInfoCard = ({ userId }: { userId: string }) => {};
const UserInfoCard = ({ user }: { user: User }) => {
  //convert createdAtDate to joinedDate
  const createdAtDate = new Date(user.createdAt);
  const joinedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className='p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4'>
        {/* TOP SECTION */}
        <div className='flex items-center justify-between font-medium'>
          <span className='text-gray-500'>User Information</span>
          <Link href='/' className='text-blue-500 text-sm'>
            See all
          </Link>
        </div>
        {/* BOTTOM SECTION */}
        <div className='flex flex-col gap-4 text-gray-500'>
          {/* USER TITLE */}
          <div className='flex items-center gap-2'>
            {/* <span className='text-xl text-black'>Test User Lloyd</span> */}
            <span className='text-xl text-black'>
              {" "}
              {user.firstName && user.lastName
                ? user.firstName + " " + user.lastName
                : user.username}
            </span>
            {/* <span className='text-sm'>@testJohnathan</span> */}
            <span className='text-sm'>@{user.username}</span>
          </div>
          {/* USER DESCRIPTION */}
          {user.description && <p>{user.description}</p>}
          {/* USER CONTEXT */}
          {user.city && (
            <div className='flex items-center gap-2'>
              <Image src='/map.png' alt='city icon' width={16} height={16} />
              <span>
                Living in <b>{user.city}</b>
              </span>
            </div>
          )}
          {user.school && (
            <div className='flex items-center gap-2'>
              <Image
                src='/school.png'
                alt='school icon'
                width={16}
                height={16}
              />
              <span>
                Went to <b>{user.school}</b>
              </span>
            </div>
          )}
          {user.work && (
            <div className='flex items-center gap-2'>
              <Image src='/work.png' alt='work icon' width={16} height={16} />
              <span>
                Works at <b>{user.work}</b>
              </span>
            </div>
          )}
          <div className='flex items-center justify-between'>
            {user.website && (
              <div className='flex items-center gap-1'>
                <Image src='/link.png' alt='link ikon' width={16} height={16} />
                <Link href={user.website} className='text-blue-500 font-medium'>
                  {user.website}
                </Link>
              </div>
            )}
            <div className='flex items-center gap-1'>
              <Image src='/date.png' alt='date ikon' width={16} height={16} />
              {/* <span>Joined August 2024</span> */}
              <span>Joined {joinedDate}</span>
            </div>
          </div>
          <button className='bg-blue-500 text-white p-2 text-sm rounded-md'>
            Follow
          </button>
          <span className='text-red-400 self-end text-xs cursor-pointer'>
            Block User
          </span>
        </div>
      </div>
    </>
  );
};

export default UserInfoCard;
