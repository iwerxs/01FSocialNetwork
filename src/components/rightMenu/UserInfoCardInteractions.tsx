//src/components/rightMenu/UserInfoCardInteractions.tsx
"use client";
import React from "react";

const UserInfoCardInteractions = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  return (
    <>
      <div className=''>
        <form action=''>
          <button className='bg-blue-500 text-white text-sm rounded-md p-2'>
            {isFollowing
              ? "Following"
              : isFollowingSent
              ? "Friend Request Sent"
              : "Follow"}
          </button>
        </form>
        <form action='' className='self-end'>
          <span className='text-red-400 text-xs cursor-pointer'>
            {isUserBlocked ? "Unblock User" : "Block User"}
          </span>
        </form>
      </div>
    </>
  );
};

export default UserInfoCardInteractions;
