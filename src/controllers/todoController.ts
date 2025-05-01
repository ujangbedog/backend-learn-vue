import { Request, Response } from "express";

export const getTodos = (req: Request, res: Response) => {
  res.json([{ id: 1, title: "Belajar TypeScript" }]);
};

export const getTodoById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  res.json({ id, title: "Todo #" + id });
};

export const createTodo = (req: Request, res: Response) => {
  const newTodo = req.body;
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const updatedTodo = req.body;
  res.json({ id, ...updatedTodo });
};

export const deleteTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  res.status(204).send();
};
