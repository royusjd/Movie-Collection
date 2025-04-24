import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const database = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

database.connect((err) => {
	if (err) {
		console.error("Failed to connect to DATABASE:", err);
	} else {
		console.log("You have sucessfully connected!");
	}
});

export default database;
