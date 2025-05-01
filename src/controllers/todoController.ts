import { Request, Response } from "express";
import * as todoModel from "../models/todoModel";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await todoModel.getTodos();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTodoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  try {
    const todo = await todoModel.getTodoById(id);

    if (todo.length === 0) {
      res.status(404).json({ message: "Todo Not Found" });
      return;
    }

    res.json(todo[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({ message: "Title and Description are required" });
    return;
  }

  try {
    const newTodo = await todoModel.createTodo(title, description);
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  const { title, description, completed } = req.body;

  try {
    const updatedTodo = await todoModel.updateTodo(
      id,
      title,
      description,
      completed
    );

    if (updatedTodo.length === 0) {
      res.status(404).json({ message: "Todo Not Found" });
      return;
    }

    res.json(updatedTodo[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  try {
    const deletedTodo = await todoModel.deleteTodo(id);

    if (deletedTodo.length === 0) {
      res.status(404).json({ message: "Todo Not Found" });
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
