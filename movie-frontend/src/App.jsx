import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>

				{}
				<Route
					path="/add-movie"
					element={<PrivateRoute element={<AddMovie />} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
