import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const unsplash = axios.create({
  baseURL:
    "https://api.unsplash.com/",
});
