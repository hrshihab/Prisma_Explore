const { PrismaClient } = require("@prisma/client");
const faker = require("faker");

const prisma = new PrismaClient();

async function main() {
  try {
    for (let i = 0; i < 20; i++) {
      const title = faker.lorem.words(3); // Generate a random title
      const content = faker.lorem.paragraph();
      const published = faker.datatype.boolean();
      const author = faker.name.findName();
      const authorId = faker.datatype.number();

      // Create post
      await prisma.post.create({
        data: {
          title,
          content,
          published,
          author,
          authorId,
        },
      });

      // Create a duplicate post with the same title
      await prisma.post.create({
        data: {
          title,
          content: faker.lorem.paragraph(),
          published,
          author,
          authorId,
        },
      });
    }
    console.log("Fake data created successfully!");
  } catch (error) {
    console.error("Error creating fake data:", error);
  }
}

main();
