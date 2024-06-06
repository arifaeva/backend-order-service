import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: "http://localhost:8006",
    changeOrigin: true,
  })
);

// app.get("/", (req, res) => {
//     return res.status(200).json({ message: "Hello from api gateway!" });
// });

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running at http://localhost:3000");
});
