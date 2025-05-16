// backend/server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api/profile", (req, res) => {
  res.json({ name: "shivank", postion: "software developer" });
});
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
