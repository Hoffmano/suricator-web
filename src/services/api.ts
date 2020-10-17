import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.BASE_URL)
const api = axios.create({
	baseURL: process.env.BASE_URL,
});

export default api;
