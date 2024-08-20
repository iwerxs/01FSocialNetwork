//src/components/UserInfoCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const UserInfoCard = ({ userId }: { userId: string }) => {
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
            <span className='text-xl text-black'>Test User Lloyd</span>
            <span className='text-sm'>@testJohnathan</span>
          </div>
          {/* USER DESCRIPTION */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione
            laudantium eos perspiciatis, cupiditate facere.
          </p>
          {/* USER CONTEXT */}
          <div className='flex items-center gap-2'>
            <Image src='/map.png' alt='city icon' width={16} height={16} />
            <span>
              Living in <b>Denver</b>
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Image src='/school.png' alt='school icon' width={16} height={16} />
            <span>
              Went to <b>Edgar High Sch</b>
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Image src='/work.png' alt='work icon' width={16} height={16} />
            <span>
              Works at <b>Apple Inc.</b>
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              <Image src='/link.png' alt='link ikon' width={16} height={16} />
              <Link
                href='https://apple.com'
                className='text-blue-500 font-medium'>
                Lloyd-Dev
              </Link>
            </div>
            <div className='flex items-center gap-1'>
              <Image src='/date.png' alt='date ikon' width={16} height={16} />
              <span>Joined August 2024</span>
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
