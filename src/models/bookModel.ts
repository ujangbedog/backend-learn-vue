import pool from "../utils/db";

export const createBook = async (
  title: string,
  description: string,
  authors: string,
  price: number,
  categories: string,
  cover: string
): Promise<any> => {
  try {
    const result = await pool.query(
      `INSERT INTO books (title, description, authors, price, categories, cover) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, description, authors, price, categories, cover]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error("Server Error");
  }
};
