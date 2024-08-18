//src/component/RightMenu.tsx
import React from "react";
import Advert from "./Advert";
import Birthdays from "./Birthdays";
import FriendRequest from "./FriendRequest";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <FriendRequest />
        <Birthdays />
        <Advert size='md' />
      </div>
    </>
  );
};

export default RightMenu;
