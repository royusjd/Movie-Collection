import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/api";

const MovieDetail = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await getMovies();
				const selectedMovie = response.data.find(
					(m) => m.id === parseInt(movieId)
				);
				setMovie(selectedMovie);
			} catch (error) {
				console.error("Error fetching movie details:", error);
			}
		};

		fetchMovie();
	}, [movieId]);

	if (!movie) return <div>Loading...</div>;

	return (
		<div className="movie-detail">
			<h1>{movie.title}</h1>
			<img
				src={movie.image_url}
				alt={movie.title}
			/>
			<p>
				<strong>Release Year:</strong> {movie.release_year}
			</p>
			<p>
				<strong>Rating:</strong> {movie.rating}
			</p>
			<p>
				<strong>Description:</strong> {movie.description}
			</p>
			<p>
				<strong>Director ID:</strong> {movie.director_id}
			</p>
		</div>
	);
};

export default MovieDetail;
