const express = require("express");
const app = express();
let bodyParser = require("body-parser");

let todoList = [
  {
    todo: "learn express",
    done: true
  },
  {
    todo: "learn react",
    done: false
  }
];

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/todo", (reg, res) => {
  res.send(todoList); // where data ??
});

app.post("/todo", (req, res) => {
  let newTodo = req.body;
  todoList.push(newTodo);
  res.send("New data added successfuly!");
});


app.listen(3010, () => console.log("Server is listening on localhost:3010"));
