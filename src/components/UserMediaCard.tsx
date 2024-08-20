//src/components/UserMediaCard.tsx
import React from "react";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: string }) => {
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
      </div>
    </>
  );
};

export default UserMediaCard;
