import { Request, Response } from "express";
import * as userModel from "../../models/v2/userModel";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  try {
    const user = await userModel.getUserById(id);

    if (user.length === 0) {
      res.status(404).json({ message: "User Not Found" });
      return;
    }

    res.json(user[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, job, avatar } = req.body;

  if (!name || !email || !job) {
    res.status(400).json({ message: "Name, email and job are required" });
    return;
  }

  try {
    const newUser = await userModel.createUser(name, email, job, avatar);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  const { name, email, job, avatar } = req.body;

  try {
    const updatedUser = await userModel.updateUser(
      id,
      name,
      email,
      job,
      avatar
    );

    if (updatedUser.length === 0) {
      res.status(404).json({ message: "User Not Found" });
      return;
    }

    res.json(updatedUser[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  try {
    const deletedUser = await userModel.deleteUser(id);

    if (deletedUser.length === 0) {
      res.status(404).json({ message: "User Not Found" });
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
