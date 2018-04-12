const axios = require("axios");
const cross = require("cross");



fetch("http://localhost:3010/todo")
  .then(rawResponse => {
    console.log("---------------------------------");
    console.log("get All");
    console.log(rawResponse.data);
    // rawResponse.data();
  })

  .catch(function(error) {
    console.log(error);
  });

// get All
const getAll = () => {
  return axios
    .get("http://localhost:3010/todo")
    .then(rawResponse => {
      console.log("---------------------------------");
      console.log("get All");
      console.log(rawResponse.data);
      // rawResponse.data();
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
    .get("http://localhost:3010/todo/1")
    .then(rawResponse => {
      console.log("-----------------------------------");
      console.log("get One");
      console.log(rawResponse.data);
    })
    .catch(function(error){
      console.log(error);
    });
};

// Create new todo
const createNew = () => {
  return axios
    .post("http://localhost:3010/todo", {
      todo: "New Todo",
      done: false
    })
    .then(function(rawResponse) {
      console.log("--------------------------------------");
      console.log("Create new todo");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

getAll();
getOne();
createNew();
getAll();
// axios.post("http://localhost:3010", { todo: "learn react"});
