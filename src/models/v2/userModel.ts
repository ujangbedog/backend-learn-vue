import pool from "../../utils/db";

export const getUsers = async (): Promise<any> => {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const getUserById = async (id: number): Promise<any> => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const createUser = async (
  name: string,
  email: string,
  job: string,
  avatar?: string
): Promise<any> => {
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, job, avatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, job, avatar || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const updateUser = async (
  id: number,
  name: string,
  email: string,
  job: string,
  avatar?: string
): Promise<any> => {
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2, job = $3, avatar = $4 WHERE id = $5 RETURNING *",
      [name, email, job, avatar, id]
    );
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};

export const deleteUser = async (id: number): Promise<any> => {
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows;
  } catch (err) {
    throw new Error("Server Error");
  }
};
