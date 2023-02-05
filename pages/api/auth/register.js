import { prisma } from "../../../lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const data = req.body;

  const userExists = await prisma.user.count({
    where: {
      userName: req.body.userName,
    },
  });

  const emailExists = await prisma.user.count({
    where: {
      email: req.body.email,
    },
  });

  if (emailExists) {
    return res.status(403).json("Email is already registered");
  }

  if (userExists) {
    return res.status(403).json("UserName already exists!");
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newInfo = {
    ...data,
    password: hashedPassword,
  };

  try {
    const user = await prisma.User.create({
      data: {
        ...newInfo,
      },
    });
    const { password, ...other } = user;
    res.status(200).json(other);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
