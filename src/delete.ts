import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // const deleteMany = await prisma.post.deleteMany({
  //   where: {
  //     title: "Hello World 3",
  //   },
  // });
  const deleteOne = await prisma.post.delete({
    where: {
      id: 3,
    },
  });
  console.log(deleteOne);
};
main();
