import { PrismaClient } from "@prisma/client";
const faker = require("faker");

const prisma = new PrismaClient();

async function main() {
  // create many
  // const result = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Hello World 6",
  //       content: "This is my second post",
  //       authorId: 3,
  //     },
  //     {
  //       title: "Hello World 6",
  //       content: "This is my third post",
  //       authorId: 4,
  //     },
  //     {
  //       title: "Hello World 7",
  //       content: "This is my fourth post",
  //       authorId: 5,
  //     },
  //   ],
  // });
  console.log(faker.name.firstName());
  console.log(faker.address.city());
}

main();
