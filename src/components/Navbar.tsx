import React from "react";
import dotenv from "dotenv";
import "../styles/Navbar.css";
import SearchBar from "./SearchBar";

dotenv.config();

export default function Navbar() {
  return (
    <nav
      id="nav"
      className="navbar navbar-expand navbar-light topbar static-top shadow-sm"
    >
      <a href="/" className="logo">
        <img className="logo pl-2" src="/meerkat.svg" alt="Logo Suricator" />
        Suricator
      </a>
      {window.location.pathname != "/" && <SearchBar />}
    </nav>
  );
}
