import React from "react";
import dotenv from "dotenv";
import "../styles/Navbar.css";
import SearchBar from "./SearchBar";

dotenv.config();

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow-sm">
        <a href="/">Suricator</a>
      </nav>
    </div>
  );
}
