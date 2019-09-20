import axios from "axios";
//GET request to server from client
axios
  .get("http://localhost:8000/api/", {})
  .then(response => {})
  .catch(error => {});

//POST request to server from client
axios
  .post("http://localhost:8000/api/", {})
  .then(response => {})
  .catch(error => {});

//PUT request to server from client
axios
  .put("http://localhost:8000/api/", {})
  .then(response => {})
  .catch(error => {});

//DELETE request to server from client
axios
  .delete("http://localhost:8000/api/", {})
  .then(response => {})
  .catch(error => {});
