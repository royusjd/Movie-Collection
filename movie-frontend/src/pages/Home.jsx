import React, { useEffect, useState } from "react";
import { getMovies } from "../services/api";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await getMovies();
				setMovies(response.data);
			} catch (error) {
				console.error("Error fetching movies:", error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<div>
			<h1>Movies</h1>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						{movie.title} - {movie.release_year}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
