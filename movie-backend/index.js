import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import database from "./database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Movie Collection API is working!");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
