import pool from "../utils/db";

export const getTodos = async (): Promise<any> => {
  try {
    const result = await pool.query("SELECT * FROM todos");
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const getTodoById = async (id: number): Promise<any> => {
  try {
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const createTodo = async (
  title: string,
  description: string
): Promise<any> => {
  try {
    const result = await pool.query(
      "INSERT INTO todos (title, description, completed) VALUES ($1, $2, $3) RETURNING *",
      [title, description, false]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const updateTodo = async (
  id: number,
  title: string,
  description: string,
  completed: boolean
): Promise<any> => {
  try {
    const result = await pool.query(
      "UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *",
      [title, description, completed, id]
    );
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const deleteTodo = async (id: number): Promise<any> => {
  try {
    const result = await pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};
