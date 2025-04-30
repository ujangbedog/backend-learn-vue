import app from "./app";

const PORT = process.env.PORT || 3000;

// Fungsi untuk menjalankan server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

// Mengecek apakah aplikasi berjalan dalam mode pengembangan
if (process.env.NODE_ENV === "development") {
  startServer();
}

// Ekspor handler untuk Vercel
export default (req, res) => {
  app(req, res);
};
