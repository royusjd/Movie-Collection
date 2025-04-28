import React from "react";
import { addMovie } from "../services/api";
import MovieForm from "../components/MovieForm";

const AddMovie = () => {
	const handleMovieSubmit = async (movieData) => {
		try {
			await addMovie(movieData);
			alert("Movie added successfully");
		} catch (error) {
			console.error("Error adding movie:", error);
		}
	};

	return (
		<div>
			<h1>Add New Movie</h1>
			<MovieForm onSubmit={handleMovieSubmit} />
		</div>
	);
};

export default AddMovie;
