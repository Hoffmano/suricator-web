import React from "react";
import dotenv from "dotenv";
import "../styles/Navbar.css"

dotenv.config();

export default function Navbar() {
    return (
		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow-sm">
			<a href="/">
				Suricator
			</a>
		</nav>
	);
}