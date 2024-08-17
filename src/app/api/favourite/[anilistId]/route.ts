import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { anilistId: string } },
) {
  const session = await auth();
  const userId = session?.user?.id;
  const anilistId = parseInt(params.anilistId);

  if (!userId) {
    return NextResponse.json({
      message: "Unauthorized",
      status: false,
    });
  }
  if (!anilistId) {
    return NextResponse.json({
      message: "Anilist ID is required",
      status: false,
    });
  }

  try {
    const isFavourite = await prisma.favourite.findFirst({
      where: {
        userId,
        anilistId,
      },
    });

    if (!isFavourite) {
      return NextResponse.json({
        message: "Not in favourites",
        status: false,
      });
    }

    return NextResponse.json({
      message: "In favourites",
      status: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error",
      status: false,
    });
  }
}
