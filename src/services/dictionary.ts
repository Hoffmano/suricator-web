import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const dictionaryAPI = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en"
});
