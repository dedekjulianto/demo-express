const axios = require("axios");

const getAll = () => {
  return axios
    .get("http://localhost:3010/todo")
    .then(rawResponse => {
      console.log(rawResponse.data);
      // rawResponse.data();
    })
    .catch(err => {
      console.log(err);
    });
};

axios.post("http://localhost:3010", { todo: "learn react"});
