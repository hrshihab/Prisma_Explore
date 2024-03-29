import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const updateOne = await prisma.post.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     title: "Hello World 1 - Updated",
  //     content: "This is my first post - Updated",
  //   },
  // });

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Hello World 3",
    },
    data: {
      published: true,
    },
  });
  const upsertData = await prisma.post.upsert({
    where: {
      id: 7,
    },
    update: {
      author: "John Doe",
    },
    create: {
      title: "Hello World 5",
      content: "This is my fourth post",
      authorId: 5,
    },
  });
  console.log(upsertData);
};

main();
