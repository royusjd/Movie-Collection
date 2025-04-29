import axios from "axios";

const API_URL = "http://localhost:3001";

const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const registerUser = async (email, password) => {
	try {
		const response = await axios.post("http://localhost:3001/register", {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const loginUser = (email, password) =>
	api.post("/login", { email, password });

export const getMovies = () => api.get("/movies");

export const addMovie = (movieData) => api.post("/movies", movieData);

export default api;
