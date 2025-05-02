import pool from "../utils/db";

export const createOrder = async (
  namaProduk: string,
  deskripsi: string,
  kategori: string,
  metodePembayaran: string,
  harga: number,
  tanggal: string
): Promise<any> => {
  try {
    const result = await pool.query(
      `INSERT INTO orders (nama_produk, deskripsi, kategori, metode_pembayaran, harga, tanggal) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [namaProduk, deskripsi, kategori, metodePembayaran, harga, tanggal]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error("Server Error");
  }
};
