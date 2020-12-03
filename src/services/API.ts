import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});
