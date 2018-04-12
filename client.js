const axios = require("axios");
const cross = require("cross");

const url = "http:/localhost:3010";

fetch(`${url}/todo`)
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
    .get(`${url}/todo`)
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
    .get(`${url}/todo/1`)
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
    .post(`${url}/todo`, {
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
