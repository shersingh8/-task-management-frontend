import axios from "axios";

const API_URL = "http://localhost:3000/api/";

const getAll = () => {
  return axios.get(API_URL + "tasks");
};

const get = id => {
  return axios.get(API_URL + `tasks/${id}`);
};

const create = data => {
  return axios.post(API_URL +  "tasks", data);
};

const update = (id, data) => {
  return axios.put(API_URL + `tasks/${id}`, data);
};

const remove = id => {
  return axios.delete(API_URL + `tasks/${id}`);
};

const removeAll = () => {
  return axios.delete(API_URL + `tasks`);
};

const findByTitle = title => {
  return axios.get(API_URL + `tasks?title=${title}`);
};

const taskservice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default taskservice;
