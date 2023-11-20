import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (username, name, password, image) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        name,
        password,
        image,
      },
    });
    return newUser;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default createUser;
