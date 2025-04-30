import express from "express";

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello from Express + Bun!" });
});

// Port listening
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
