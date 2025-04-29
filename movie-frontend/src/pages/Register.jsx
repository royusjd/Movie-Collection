import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords don't match");
			return;
		}
		try {
			await registerUser(formData.email, formData.password);
			setError("");
			navigate("/login");
		} catch (error) {
			setError("Registration failed");
		}
	};

	return (
		<div className="login-register">
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Email"
					required
				/>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					placeholder="Password"
					required
				/>
				<input
					type="password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleChange}
					placeholder="Confirm Password"
					required
				/>
				<button type="submit">Register</button>
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	);
};

export default Register;
