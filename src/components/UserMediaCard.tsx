//src/components/UserMediaCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";

// const UserMediaCard = ({ userId }: { userId: string }) => {};
const UserMediaCard = ({ user }: { user: User }) => {
  return (
    <>
      <div className='p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4'>
        {/* TOP SECTION */}
        <div className='flex items-center justify-between font-medium'>
          <span className='text-gray-500'>User Media</span>
          <Link href='/' className='text-blue-500 text-sm'>
            See all
          </Link>
        </div>
        {/* BOTTOM SECTION IMAGES*/}
        <div className='flex gap-4 justify-between flex-wrap'>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-1'
              fill
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-2'
              fill
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-3'
              fill
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-4'
              fill
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-5'
              fill
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-6'
              fill
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/237321/pexels-photo-237321.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-7'
              fill
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src='https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='nature-8'
              fill
              className='rounded-md object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMediaCard;
