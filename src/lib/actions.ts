//src/lib/actions.ts
//using one function to handle all of the 'States'
"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    if(existingFollow){
      await prisma.follower.delete({
        where: {
          id: existingFollow.id
        },
      });
    }else{
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });
      if(existingFollowRequest){
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id
          }
        })
      }else{
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};