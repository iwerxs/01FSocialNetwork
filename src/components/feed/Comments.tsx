//src/compnents/feed/Comments.tsx
import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
    <>
      <div className='p-2'>
        {/* WRITE COMMENT */}
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Sara'
            width={32}
            height={32}
            className='w-8 h-8 rounded-full'
          />
          <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
            <input
              type='text'
              placeholder='Write a comment...'
              className='bg-transparent outline-none flex-1'
            />
            <Image
              src='/emoji.png'
              alt='emoji'
              width={16}
              height={16}
              className='cursor-pointer'
            />
          </div>
        </div>

        {/* COMMENTS */}
        <div className='flex items-center gap-4'>
          {/* COMMNET */}
          <div className='flex gap-4 justify-between mt-6'>
            {/* AVATAR */}
            <Image
              src='https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Sara'
              width={40}
              height={40}
              className='w-10 h-10 rounded-full'
            />

            {/* DESCRIPTION */}
            <div className='flex flex-col flex-1 gap-2'>
              <span className='font-medium'>Sara</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                provident consequuntur id sit commodi, aliquam perferendis nisi
                est dolorem ratione dicta obcaecati corrupti? Fuga voluptate
                dolore in vel alias debitis?
              </p>
              <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                <div className='flex items-center gap-4'>
                  <Image
                    src='/like.png'
                    alt='icon'
                    width={14}
                    height={14}
                    className='cursor-pointer w-4 h-4'
                  />
                  <span className='text-gray-300'>|</span>
                  <span className='text-gray-500'>357</span>
                </div>
                <div className='text-gray-500'>Reply</div>
              </div>
            </div>

            {/* IKON */}
            <Image
              src='/more.png'
              alt='icon'
              width={16}
              height={16}
              className='cursor-pointer w-4 h-4'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
