//src/components/AddPost.tsx
import React from "react";
import Image from "next/image";

const AddPost = () => {
  return (
    <>
      <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
        {/* AVATAR */}
        <Image
          src='https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='Ricky'
          width={48}
          height={48}
          className='w-12 h-12 object-cover rounded-full'
        />
        {/* POST */}
        <div className='flex-1 border-2 border-solid border-red-600'>
          {/* TEXT INPUT */}
          <div className='flex gap-4'>
            <textarea
              name=''
              id=''
              placeholder='Your thoughts'
              className='flex-1 bg-slate-100 rounded-lg p-2'></textarea>
            <Image
              src='/emoji.png'
              alt='emoji'
              width={20}
              height={20}
              className='w-5 h-5 cursor-pointer self-end'
            />
          </div>
          {/* POST OPTIONS */}
          <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image
                src='/addImage.png'
                alt='addImage'
                width={20}
                height={20}
              />
              Image
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image
                src='/addVideo.png'
                alt='addVideo'
                width={20}
                height={20}
              />
              Video
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image
                src='/addEvent.png'
                alt='addEvent'
                width={20}
                height={20}
              />
              Event
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image src='/addPoll.png' alt='addPoll' width={20} height={20} />
              Poll
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
