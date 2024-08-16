import { auth } from "@/auth";
import prisma from "@/lib/prisma";

const getWatchingList = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return null;
  }

  const list = await prisma.watchingList.findMany({
    where: {
      userId,
    },
    take: 20,
    orderBy: {
      updatedAt: "desc",
    },
  });

  return list;
};

export default getWatchingList;
