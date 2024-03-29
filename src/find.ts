import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // find all posts
  const getAllFromDB = await prisma.post.findMany({
    select: {
      title: true,
      content: true,
    },
  });

  // find first
  // const getFirstFromDB = await prisma.post.findFirstOrThrow({
  //   where: {
  //     id: 2,
  //   },
  // });

  // find unique or throw
  // const getUniqueFromDB = await prisma.post.findUniqueOrThrow({
  //   where: {
  //     id: 3,
  //   },
  // });

  console.log(getAllFromDB);
}

main();
