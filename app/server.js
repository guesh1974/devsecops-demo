const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Awash Bank DevSecOps Demo Running"));

/** Insecure endpoint for demo (SQL injection pattern) */
app.get("/search", (req, res) => {
  const name = req.query.name || "";
  // Example insecure code (Semgrep should flag)
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  res.send({ query, note: "This is intentionally insecure for demo" });
});

/** Hardcoded secret for demo */
const DB_PASSWORD = "Admin@12345"; // Semgrep should flag

app.listen(3000, () => console.log("App running on port 3000"));