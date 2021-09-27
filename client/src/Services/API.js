import axios from "axios";

const URL = "http://localhost:8000/api";

export function getAllProducts() {
  return axios.get(`${URL}/product/`);
}

export function addProduct(formData) {
  return axios.post(`${URL}/product`, formData);
}
export function getOneProduct(id) {
  return axios.get(`${URL}/product/${id}`);
}
