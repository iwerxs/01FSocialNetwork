//src/components/feed/Post.tsx
import React from "react";
import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        {/* USER INFO */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src='https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Sara'
              width={40}
              height={40}
              className='w-10 h-10 rounded-full'
            />
            <span className='font-medium'>Sara</span>
          </div>
          <Image src='/more.png' width={16} height={16} alt='more' />
        </div>
        {/* DESCRIPTION */}
        <div className='flex flex-col gap-4'>
          <div className='w-full min-h-96 relative'>
            <Image
              src='https://images.pexels.com/photos/3586/port-yachts-monaco-luxury.jpg?auto=compress&cs=tinysrgb&w=600'
              alt='coastal city'
              fill
              className='object-cover rounded-md'
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            natus totam numquam corporis illo obcaecati, neque perspiciatis nam
            magni exercitationem et nesciunt sit? Explicabo quisquam similique
            repellendus labore iure quibusdam.
          </p>
        </div>
        {/* INTERACTION USE STATE HOOK */}
        <div className='flex items-center justify-between text-sm my-4'>
          <div className='flex gap-8'>
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
              <Image
                src='/like.png'
                width={16}
                height={16}
                alt='like'
                className='cursor-pointer'
              />
              <span className='text-gray-500'>|</span>
              <span className='text-gray-500'>
                321<span className='hidden md:inline'> Likes</span>
              </span>
            </div>
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
              <Image
                src='/comment.png'
                width={16}
                height={16}
                alt='comment'
                className='cursor-pointer'
              />
              <span className='text-gray-500'>|</span>
              <span className='text-gray-500'>
                321<span className='hidden md:inline'> Comments</span>
              </span>
            </div>
          </div>
          <div className='p-2'>
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
              <Image
                src='/share.png'
                width={16}
                height={16}
                alt='share'
                className='cursor-pointer'
              />
              <span className='text-gray-500'>|</span>
              <span className='text-gray-500'>
                321<span className='hidden md:inline'> Share</span>
              </span>
            </div>
          </div>
        </div>
        <Comments />
      </div>
    </>
  );
};

export default Post;
