import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL_API,
	// baseURL: "http://localhost:3333",
});

export default api;
