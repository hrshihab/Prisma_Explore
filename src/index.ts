import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.post.create({
  //   data: {
  //     title: "Hello World 2",
  //     content: "This is my second post",
  //     authorId: 2,
  //   },
  // });

  const getAllFromDB = await prisma.post.findMany();

  console.log(getAllFromDB);
}

main();
