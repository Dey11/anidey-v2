import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({
      message: "Unauthorized",
      status: false,
    });
  }

  try {
    const body = await request.json();

    if (
      !body.anilistId ||
      !body.animeTitle ||
      !body.image ||
      !body.action ||
      !body.totalEpisodes
    ) {
      return NextResponse.json({
        message: "All fields are required",
        status: false,
      });
    }

    if (body.action == "add") {
      const addFavourite = await prisma.favourite.create({
        data: {
          animeTitle: body.animeTitle,
          image: body.image,
          anilistId: parseInt(body.anilistId),
          userId,
          totalEpisodes: parseInt(body.totalEpisodes),
        },
      });
      console.log("Favourite added");
      return NextResponse.json({
        message: "Favourite added",
        status: true,
      });
    } else if (body.action == "remove") {
      const removeFavourite = await prisma.favourite.deleteMany({
        where: {
          anilistId: parseInt(body.anilistId),
          userId,
        },
      });
      console.log("Favourite removed");
      return NextResponse.json({
        message: "Favourite removed",
        status: true,
      });
    } else {
      return NextResponse.json({
        message: "Invalid action",
        status: false,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Something went wrong",
      status: false,
    });
  }
}
