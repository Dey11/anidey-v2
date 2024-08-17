import { auth } from "@/auth";
import prisma from "@/lib/prisma";

const getWatchingList = async (limit: number = 20) => {
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

export default getWatchingList;
