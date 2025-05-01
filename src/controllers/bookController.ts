import { Request, Response } from "express";
import * as bookModel from "../models/bookModel";

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  let { title, description, authors, price, categories } = req.body;
  const file = req.file;

  try {
    categories = JSON.parse(categories); // valid
  } catch (err) {
    res.status(400).json({ message: "Invalid JSON in categories" });
    return;
  }

  if (
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof description !== "string" ||
    description.trim() === "" ||
    typeof authors !== "string" ||
    authors.trim() === "" ||
    isNaN(Number(price)) ||
    !Array.isArray(categories) ||
    categories.length === 0 ||
    !file // ← validasi file
  ) {
    res
      .status(400)
      .json({ message: "All fields are required or invalid format" });
    return;
  }

  const cover = {
    originalname: file.originalname,
    mimetype: file.mimetype,
    size: file.size,
    buffer: file.buffer.toString("base64"), // atau simpan path jika pakai diskStorage
  };

  try {
    const newBook = await bookModel.createBook(
      title,
      description,
      authors,
      Number(price),
      JSON.stringify(categories),
      JSON.stringify(cover)
    );
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
