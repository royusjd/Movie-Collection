import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import database from "./database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Movie Collection API is working!");
});

app.get("/movies", (req, res) => {
	database.query("SELECT * FROM movie", (err, results) => {
		if (err) {
			console.error("Failed to get movies:", err);
			res.status(500).json({ error: "Database error" });
		} else {
			res.json(results);
		}
	});
});

app.post("/movies", (req, res) => {
	const { title, description, release_year, rating, director_id, image_url } =
		req.body;

	const sql = `
		INSERT INTO movie (title, description, release_year, rating, director_id, image_url)
		VALUES (?, ?, ?, ?, ?, ?)
	`;

	const values = [
		title,
		description,
		release_year,
		rating,
		director_id,
		image_url,
	];

	database.query(sql, values, (err, result) => {
		if (err) {
			console.error("Failed to add movie:", err);
			res.status(500).json({ error: "Database error" });
		} else {
			res.status(201).json({
				message: "Movie added successfully!",
				movieId: result.insertId,
			});
		}
	});
});
