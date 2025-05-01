import { Request, Response } from "express";
import pool from "../utils/db";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query("SELECT * FROM todos");
    res.json(result.rows);
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
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "Todo Not Found" });
      return;
    }
    res.json(result.rows[0]);
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
    const result = await pool.query(
      "INSERT INTO todos (title, description, completed) VALUES ($1, $2, $3) RETURNING *",
      [title, description, false]
    );
    res.status(201).json(result.rows[0]);
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
    const result = await pool.query(
      "UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *",
      [title, description, completed, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ message: "Todo Not Found" });
      return;
    }

    res.json(result.rows[0]);
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
    const result = await pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ message: "Todo Not Found" });
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
