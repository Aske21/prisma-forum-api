import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class userService {
  public getAllUsersWithPosts = async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        include: {
          posts: true,
        },
      });
      res.json(users);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  };

  public getAllUsers = async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  };

  public getUserByID = async (req, res) => {
    const { id } = req.params;

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(user);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  };

  public deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      res.json("User has been deleted!");
      res.json(user);
    } catch (err) {
      res.sendStatus(400);
      console.log(err);
    }
  };
}

export default new userService();
