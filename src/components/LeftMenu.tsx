//src/components/LeftMenu.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Advert from "./Advert";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <>
      <div className='flex flex-col gap-6'>
        {type === "home" && <ProfileCard />}
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/posts.png' alt='posts' width={20} height={20} />
            <span>My Posts</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/activity.png' alt='activity' width={20} height={20} />
            <span>Activity</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image
              src='/market.png'
              alt='market place'
              width={20}
              height={20}
            />
            <span>Market Place</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/events.png' alt='events' width={20} height={20} />
            <span>Events</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/albums.png' alt='albums' width={20} height={20} />
            <span>Albums</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/videos.png' alt='videos' width={20} height={20} />
            <span>My Videos</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/news.png' alt='news' width={20} height={20} />
            <span>News</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/courses.png' alt='courses' width={20} height={20} />
            <span>My Courses</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/lists.png' alt='lists' width={20} height={20} />
            <span>My Lists</span>
          </Link>
          <hr className='border-slate-50 border-t-1 w-36 self-center' />
        </div>
        <div className='flex flex-col gap-2 p-4 bg-white text-gray-500 rounded-lg shadow-md text-sm'>
          <Link
            href='/'
            className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
            <Image src='/settings.png' alt='settings' width={20} height={20} />
            <span>Settings</span>
          </Link>
        </div>
        <Advert size='sm' />
      </div>
    </>
  );
};

export default LeftMenu;
