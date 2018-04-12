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


app.use(bodyParser.urlencoded({ extended: false}));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/todo", (req, res) => {
  res.send(todoList);
});

app.post("/todo", (req, res) => {
  let newTodo = req.body;
  todoList.push(newTodo);
  res.send("New data added successfuly!");
  // console.log(newTodo);
});

app.get("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send("not found");
  } else {
    res.send({ data: todoList[index]});
  }
});

app.delete("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send({ success: false, message: "data not found"});
  } else {
    todoList.splice(index, 1);
    res.send({success: true, data: todoList});
  }
});
// app.post("/todo", (req, res) => {
//   let todo = req.body.todo;
//   let done = JSON.parse(req.body.done);
//   console.log(typeof done);
//   if (todo === "") {
//     res.send("todo cannot empty");
//   } else {
//     let newTodo = {
//       todo: req.body.todo,
//       done: done
//     };
//     todoList.push(newTodo);
//     res.send({ success: true, data: newTodo});
//   }
// });







app.listen(3010, () => console.log("Server is listening on localhost:3010"));
