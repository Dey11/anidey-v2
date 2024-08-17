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

    if (
      !body.userId ||
      !body.episodeId ||
      !body.timestamp ||
      !body.animeId ||
      !body.anilistId
    ) {
      return NextResponse.json({
        message: "All fields are required",
        status: false,
      });
    }

    const updateTimestamp = await prisma.watchingList.upsert({
      where: {
        userId: isAuthenticated,
        episodeId: body.episodeId,
      },
      update: {
        timestamp: parseInt(body.timestamp),
      },
      create: {
        userId: isAuthenticated,
        episodeId: body.episodeId,
        timestamp: parseInt(body.timestamp),
        animeId: body.animeId,
        anilistId: parseInt(body.anilistId),
        image: body.image || "",
        title: body.title || "",
        episodeNo: parseInt(body.number) || 0,
        isFiller: body.isFiller || false,
        duration: parseInt(body.duration) || 0,
      },
    });

    const addToHistory = await prisma.history.upsert({
      where: {
        userId: isAuthenticated,
        episodeId: body.episodeId,
      },
      update: {
        timestamp: parseInt(body.timestamp),
      },
      create: {
        userId: isAuthenticated,
        episodeId: body.episodeId,
        animeId: body.animeId,
        anilistId: parseInt(body.anilistId),
        image: body.image || "",
        title: body.title || "",
        episodeNo: parseInt(body.number) || 0,
        isFiller: body.isFiller || false,
        duration: parseInt(body.duration) || 0,
      },
    });

    return NextResponse.json({
      message: "Timestamp updated",
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
