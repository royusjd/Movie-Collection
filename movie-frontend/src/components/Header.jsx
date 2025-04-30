import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const isAuthenticated = localStorage.getItem("token");

	const handleLogout = () => {
		localStorage.removeItem("token");
	};

	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{isAuthenticated ? (
					<>
						<li>
							<Link to="/add-movie">Add Movie</Link>
						</li>
						<li>
							<Link onClick={handleLogout}>Logout</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Header;
