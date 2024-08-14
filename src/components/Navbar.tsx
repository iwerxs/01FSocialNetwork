//src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className='h-24 flex items-center justify-between'>
        {/* Left Div */}
        <div className='md:hidden lg:block w-[20%]'>
          <Link href='/' className='text-xl font-bold text-blue-500'>
            01F SocialNetwork
          </Link>
        </div>
        {/* Center Div */}
        <div className='hidden md:flex w-[50%] text-sm'>
          {/* Links to other pages */}
          <div className='flex gap-6 text-gray-600 border-2-solid-red'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/home.png'
                width={16}
                height={16}
                className='w-4 h-4'
                alt='home'
              />
              <span>Homepage</span>
            </Link>
            <Link href='/' className='flex gap-2'>
              <Image src='/friends.png' width={16} height={16} alt='home' />
              <span>Friends</span>
            </Link>
            <Link href='/' className='flex gap-2'>
              <Image src='/stories.png' width={16} height={16} alt='home' />
              <span>Stories</span>
            </Link>
          </div>
        </div>
        {/* Right Div */}
        <div className='w-[29%] flex items-center gap-4 xl:gap-8 justify-end'>
          <ClerkLoading>
            <div
              className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-green motion-reduce:animate-[spin_1.5s_linear_infinite]'
              role='status'>
              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                Loading...
              </span>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className='cursor-pointer'>
                <Image src='/people.png' width={20} height={20} alt='people' />
              </div>
              <div className='cursor-pointer'>
                <Image
                  src='/messages.png'
                  width={20}
                  height={20}
                  alt='messages'
                />
              </div>
              <div className='cursor-pointer'>
                <Image
                  src='/notifications.png'
                  width={20}
                  height={20}
                  alt='notifications'
                />
              </div>
            </SignedIn>
            <SignedOut>
              <div className='flex items-center gap-2 text-sm'>
                <Image src='/login.png' width={20} height={20} alt='login' />
                <Link href='/sign-in'>Login / Register</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
