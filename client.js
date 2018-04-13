// const axios = require("axios");
const container = document.getElementById("container");
const url = "http:/localhost:3010";

// fetch(`${url}/todo`)
//   .then(rawResponse => {
//     console.log("---------------------------------");
//     console.log("get All");
//     console.log(rawResponse.data);
//     // rawResponse.data();
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// get Allnode
const getAll = () => {
  return axios
    .get(`${url}/todo`)
    .then(rawResponse => {
      // console.log("---------------------------------");
      // console.log("get All");
      // console.log(rawResponse.data);
      // rawResponse.data();
      let bufferString = "",
        datas = rawResponse.data;
      datas.map(data => {
        bufferString += `</br><div>${data.todo}</div><hr/>`;
      });
      container.innerHTML = bufferString;
    })
    .catch(function(error) {
      console.log(error);
    });
  // .catch(err => {
  //   console.log(err);
};

// get One
const getOne = () => {
  return axios
    .get(`${url}/todo/1`)
    .then(rawResponse => {
      console.log("-----------------------------------");
      console.log("get One");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};


// Edit todo
const editTodo = (todo) => {
  return axios
  .put(`${url}/todo/0`, {
    todo: todo,
    done: true
  })
  .then(function(rawResponse) {
    console.log("---------------------------------------");
    console.log("Edit Todo");
    console.log(rawResponse.data);
    getAll();
  })
  .catch(err=>{
    console.log(err);
  });
};

const deleteTodo = () => {
  return axios
  .delete(`${url}/todo/0`)
  .then(function(rawResponse) {
    console.log("----------------------------------------");
    console.log("Delete Todo");
    console.log(rawResponse.data);
    getAll();
  })
  .catch(err=>{
    console.log(err);
  });
}

// Create new todo
const createNew = (todo, done = false) => {
  return axios
    .post(`${url}/todo`, {
      todo: todo,
      done: done
    })
    .then(function(rawResponse) {
      console.log("--------------------------------------");
      console.log("Create new todo");
      console.log(rawResponse.data);
      getAll();
    })
    .catch(function(error) {
      console.log(error);
    });
};
getAll();
// editTodo();
// getOne();
// createNew();
// getAll();
// axios.post("http://localhost:3010", { todo: "learn react"});
