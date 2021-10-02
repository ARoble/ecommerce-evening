import axios from "axios";

const URL = "http://localhost:8000/api";
const token = JSON.parse(localStorage.getItem("token"));

export function registerUser(body) {
  return axios.post(`${URL}/user?token=${token}`, body);
}

export function getAllProducts() {
  return axios.get(`${URL}/product?token=${token}`);
}

export function addProduct(formData) {
  return axios.post(`${URL}/product?token=${token}`, formData);
}
export function getOneProduct(id) {
  return axios.get(`${URL}/product/${id}?token=${token}`);
}

export function deleteProduct(id) {
  return axios.delete(`${URL}/product/${id}?token=${token}`);
}

export function getOrders() {
  return axios.get(`${URL}/order/?token=${token}`);
}

export function getReviews(id) {
  return axios.get(`${URL}/review/${id}?token=${token}`);
}

export function createReview(body) {
  return axios.post(`${URL}/review?token=${token}`, body);
}

export function placeOrder(body) {
  return axios.post(`${URL}/order?token=${token}`, body);
}

export function fullfillOrder(id) {
  return axios.put(`${URL}/order/${id}?token=${token}`);
}
