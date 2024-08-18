//src/component/Stories.tsx
import React from "react";
import Image from "next/image";

const Stories = () => {
  return (
    <>
      <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-sx xscrollbar-hide'>
        <div className='flex gap-8 w-max'>
          {/* USER STORY RICKY*/}
          <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image
              src='https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Ricky'
              width={80}
              height={80}
              className='w-20 h-20 rounded-full ring-2'
            />
            <span className='font-medium'>Ricky</span>
          </div>
          {/* USER STORY SARA*/}
          <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image
              src='https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Sara'
              width={80}
              height={80}
              className='w-20 h-20 rounded-full ring-2'
            />
            <span className='font-medium'>Sara</span>
          </div>
          {/* USER STORY JOELLELYN*/}
          <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image
              src='https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Joellelyn'
              width={80}
              height={80}
              className='w-20 h-20 rounded-full ring-2'
            />
            <span className='font-medium'>Joellelyn</span>
          </div>
          {/* USER STORY ADELE*/}
          <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image
              src='https://images.pexels.com/photos/1975342/pexels-photo-1975342.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Adele'
              width={80}
              height={80}
              className='w-20 h-20 rounded-full ring-2'
            />
            <span className='font-medium'>Adele</span>
          </div>
          {/* USER STORY ADAM*/}
          <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image
              src='https://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Adam'
              width={80}
              height={80}
              className='w-20 h-20 rounded-full ring-2'
            />
            <span className='font-medium'>Adam</span>
          </div>
          {/* USER STORY BRIANNA*/}
          <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image
              src='https://images.pexels.com/photos/2362887/pexels-photo-2362887.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Brianna'
              width={80}
              height={80}
              className='w-20 h-20 rounded-full ring-2'
            />
            <span className='font-medium'>Brianna</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
