import app from "./app";

const PORT = process.env.PORT || 3000;

// Mengecek apakah aplikasi berjalan dalam mode pengembangan
if (process.env.NODE_ENV === "development") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Ekspor handler untuk Vercel
export default app;
