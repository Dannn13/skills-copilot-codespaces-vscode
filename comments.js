// Create web server
// npm install express body-parser
// npm install nodemon -g
// nodemon comments.js
// Open browser and type http://localhost:3000/comments
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const comments = [
  { id: 1, body: "comment 1" },
  { id: 2, body: "comment 2" },
  { id: 3, body: "comment 3" },
];

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  res.json(comment);
});

app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});

app.put("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  comment.body = req.body.body;
  res.json(comment);
});

app.delete("/comments/:id", (req, res) => {
  const index = comments.findIndex((comment) => comment.id === parseInt(req.params.id));
  comments.splice(index, 1);
  res.json({ message: "Comment deleted" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});