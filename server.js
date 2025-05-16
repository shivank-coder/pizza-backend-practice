// backend/server.js
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api/profile", (req, res) => {
  res.json({ name: "shivank", postion: "software developer" });
});
app.post("/api/form", (req, res) => {
  const { type, size } = req.body;

  // Log the received data
  console.log("✅ Order Received:");
  console.log("Pizza Type:", type);
  console.log("Pizza Size:", size);

  // Send response back to frontend
  res.json({
    success: true,
    message: "Order received successfully!",
    data: { type, size },
  });
});

app.post("/api/profile/user", (req, res) => {
  const { name, address, country, code } = req.body;
  console.log("name of user is:", name);
  console.log("addres of user :", address);
  console.log("country :", country);
});
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
