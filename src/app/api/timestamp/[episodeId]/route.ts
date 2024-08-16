import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { episodeId: string } },
) {
  let episodeId = await params.episodeId;
  const searchQuery = request.nextUrl.searchParams;
  const ep = searchQuery.get("ep");
  episodeId = episodeId + "?ep=" + ep;
  if (!episodeId || !ep) {
    return NextResponse.json({
      message: "Episode ID is required",
      status: false,
    });
  }

  const session = await auth();
  const isAuthenticated = session?.user?.id;
  if (!isAuthenticated) {
    return NextResponse.json({
      message: "Unauthorized",
      status: false,
    });
  }

  const userId = isAuthenticated;
  const getTimestamp = await prisma.watchingList.findFirst({
    where: {
      userId: userId,
      episodeId: episodeId,
    },
    select: {
      timestamp: true,
    },
  });

  if (!getTimestamp) {
    return NextResponse.json({
      message: "No timestamp found",
      status: false,
    });
  }

  return NextResponse.json({
    timestamp: getTimestamp.timestamp,
    status: true,
  });
}
