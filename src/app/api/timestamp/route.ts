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

  const body = await request.json();

  if (
    !body.userId ||
    !body.episodeId ||
    !body.timestamp ||
    !body.animeId ||
    !body.anilistId
  ) {
    console.log(
      body.userId,
      body.episodeId,
      body.timestamp,
      body.animeId,
      body.anilistId,
    );
    return NextResponse.json({
      message: "All fields are required",
      status: false,
    });
  }

  // console.log(body.title, body.number, body.isFiller);

  const updateTimestamp = await prisma.watchingList.upsert({
    where: {
      userId: body.userId,
      episodeId: body.episodeId,
    },
    update: {
      timestamp: parseInt(body.timestamp),
    },
    create: {
      userId: body.userId,
      episodeId: body.episodeId,
      timestamp: parseInt(body.timestamp),
      animeId: body.animeId,
      anilistId: parseInt(body.anilistId),
      image: body.image || "",
      title: body.title || "",
      episodeNo: body.number || 0,
      isFiller: body.isFiller || false,
    },
  });
  return NextResponse.json({
    message: "Timestamp updated",
    status: true,
  });
}
