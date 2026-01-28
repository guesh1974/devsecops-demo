const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Awash Bank DevSecOps Demo Running"));

/**
 * ✅ Secure endpoint for demo
 * - No string concatenation for query
 * - No hardcoded secrets
 */
app.get("/search", (req, res) => {
  const name = (req.query.name || "").replace(/[^a-zA-Z0-9 ]/g, "");
  const query = "SELECT * FROM users WHERE name = ?";
  res.send({ query, param: name, note: "This is a secure demo example" });
});

app.listen(3000, () => console.log("App running on port 3000"));