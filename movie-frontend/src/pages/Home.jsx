import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
						<Link
							to={`/movie/${movie.id}`}
							className="movie-card"
						>
							<img
								src={movie.image_url}
								alt={movie.title}
							/>
							<div className="movie-details">
								<h3>{movie.title}</h3>
								<p>{movie.release_year}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
