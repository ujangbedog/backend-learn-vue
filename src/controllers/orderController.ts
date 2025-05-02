import { Request, Response } from "express";
import * as orderModel from "../models/orderModel";

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { namaProduk, deskripsi, kategori, metodePembayaran, harga, tanggal } =
    req.body;

  if (
    typeof namaProduk !== "string" ||
    namaProduk.trim() === "" ||
    typeof deskripsi !== "string" ||
    deskripsi.trim() === "" ||
    typeof kategori !== "string" ||
    kategori.trim() === "" ||
    typeof metodePembayaran !== "string" ||
    metodePembayaran.trim() === "" ||
    isNaN(Number(harga)) ||
    harga < 0 ||
    !tanggal
  ) {
    res
      .status(400)
      .json({ message: "All fields are required or invalid format" });
    return;
  }

  try {
    const newOrder = await orderModel.createOrder(
      namaProduk,
      deskripsi,
      kategori,
      metodePembayaran,
      Number(harga),
      tanggal
    );
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
