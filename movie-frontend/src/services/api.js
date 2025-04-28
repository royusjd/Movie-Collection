// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:3001";

const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const registerUser = (userData) => {
	return api.post("/register", userData);
};

export const loginUser = (email, password) =>
	api.post("/login", { email, password });

export const getMovies = () => api.get("/movies");

export const addMovie = (movieData) => api.post("/movies", movieData);

export default api;
