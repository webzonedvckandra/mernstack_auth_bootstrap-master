import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:7000" });

export const signIn = (formData) => API.post("/users/sigin", formData);
export const signUp=(formData)=>API.post("/users/signup", formData);
