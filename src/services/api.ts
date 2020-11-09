import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export const api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL_API,
	// baseURL: "http://localhost:3333",
});

export const nlp_api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL_NLP_API,
	// baseURL: "http://localhost:3333",
});

export default api