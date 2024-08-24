//src/component/RightMenu.tsx
import React, { Suspense } from "react";
import Advert from "./Advert";
import Birthdays from "./Birthdays";
import FriendRequest from "./FriendRequest";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

// const RightMenu = ({ userId }: { userId?: string }) => {};
const RightMenu = ({ user }: { user?: User }) => {
  return (
    <>
      <div className='flex flex-col gap-6'>
        {user ? (
          <>
            <Suspense fallback='loading...'>
              <UserInfoCard user={user} />
            </Suspense>
            <Suspense fallback='loading...'>
              <UserMediaCard user={user} />
            </Suspense>
          </>
        ) : null}
        <FriendRequest />
        <Birthdays />
        <Advert size='md' />
      </div>
    </>
  );
};

export default RightMenu;
