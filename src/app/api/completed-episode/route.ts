import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await auth();
  const isAuthenticated = session?.user?.id;
  if (!isAuthenticated) {
    return NextResponse.json({
      message: "Unauthorized",
      status: false,
    });
  }

  try {
    const body = await request.json();

    if (!body.userId || !body.episodeId) {
      return NextResponse.json({
        message: "All fields are required",
        status: false,
      });
    }

    const findWatching = await prisma.watchingList.findUnique({
      where: {
        userId: isAuthenticated,
        episodeId: body.episodeId,
      },
    });

    if (!findWatching) {
      return NextResponse.json({
        message: "Episode not found",
        status: false,
      });
    }

    const deleteWatching = await prisma.watchingList.delete({
      where: {
        userId: isAuthenticated,
        episodeId: body.episodeId,
      },
    });

    const completeEpisode = await prisma.history.update({
      where: {
        userId: isAuthenticated,
        episodeId: body.episodeId,
      },
      data: {
        isComplete: true,
      },
    });

    return NextResponse.json({
      message: "Episode marked as watched",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "An error occurred",
      status: false,
    });
  }
}
