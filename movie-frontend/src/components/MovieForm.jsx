import React, { useState } from "react";
import { addMovie } from "../services/api";

const AddMovie = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		release_year: "",
		rating: "",
		director_id: "",
		image_url: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await addMovie(formData);
			alert("Movie added successfully");
		} catch (error) {
			console.error("Error adding movie:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="title"
				value={formData.title}
				onChange={handleChange}
				placeholder="Title"
				required
			/>
			<textarea
				name="description"
				value={formData.description}
				onChange={handleChange}
				placeholder="Description"
				required
			/>
			<input
				type="number"
				name="release_year"
				value={formData.release_year}
				onChange={handleChange}
				placeholder="Release Year"
				required
			/>
			<input
				type="number"
				name="rating"
				value={formData.rating}
				onChange={handleChange}
				placeholder="Rating"
				required
			/>
			<input
				type="number"
				name="director_id"
				value={formData.director_id}
				onChange={handleChange}
				placeholder="Director ID"
				required
			/>
			<input
				type="url"
				name="image_url"
				value={formData.image_url}
				onChange={handleChange}
				placeholder="Image URL"
			/>
			<button type="submit">Add Movie</button>
		</form>
	);
};

export default AddMovie;
