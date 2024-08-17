import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const getContinueWatchingList = async (limit: number = 20) => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return null;
  }

  try {
    const list = await prisma.watchingList.findMany({
      where: {
        userId,
      },
      take: limit,
      orderBy: {
        updatedAt: "desc",
      },
    });
    return list;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getFavouriteList = async (limit: number = 20) => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return null;
  }

  try {
    const list = await prisma.favourite.findMany({
      where: {
        userId,
      },
      take: limit,
      orderBy: {
        updatedAt: "desc",
      },
    });
    return list;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getHistoryList = async (limit: number = 20) => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return null;
  }

  try {
    const list = await prisma.history.findMany({
      where: {
        userId,
      },
      take: limit,
      orderBy: {
        updatedAt: "desc",
      },
    });
    return list;
  } catch (error) {
    console.error(error);
    return null;
  }
};
