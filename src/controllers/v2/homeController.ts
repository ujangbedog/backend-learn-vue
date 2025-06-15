import { Request, Response } from "express";
import pool from "../../utils/db";

export const home = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.status(200).json({
      status: "ok",
      message: "API V2 is running and database is connected",
      timestamp: result.rows[0].now,
    });
  } catch (err: any) {
    console.error("Failed to connect to the database:", err.stack);

    res.status(500).json({
      status: "error",
      message: "Failed to connect to the database",
    });
  }
};
