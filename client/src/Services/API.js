import axios from "axios";

const URL = "http://localhost:8000/api";

export function registerUser(body) {
  return axios.post(`${URL}/user`, body);
}

export function getAllProducts() {
  return axios.get(`${URL}/product/`);
}

export function addProduct(formData) {
  return axios.post(`${URL}/product`, formData);
}
export function getOneProduct(id) {
  return axios.get(`${URL}/product/${id}`);
}

export function deleteProduct(id) {
  return axios.delete(`${URL}/product/${id}`);
}

export function getOrders() {
  return axios.get(`${URL}/order/`);
}

export function getReviews(id) {
  return axios.get(`${URL}/review/${id}`);
}

export function createReview(body) {
  return axios.post(`${URL}/review`, body);
}

export function placeOrder(body) {
  return axios.post(`${URL}/order`, body);
}

export function fullfillOrder(id) {
  return axios.put(`${URL}/order/${id}`);
}
