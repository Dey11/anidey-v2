"use server";
import prisma from "@/lib/prisma";

type reportBugProps = {
  username: string;
  description: string;
  url: string;
};

export default async function reportBug({
  username,
  description,
  url,
}: reportBugProps) {
  try {
    const newBug = await prisma.errors.create({
      data: {
        username,
        description,
        url,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
