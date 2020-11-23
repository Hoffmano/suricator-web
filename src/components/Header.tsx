import React from "react";
import dotenv from "dotenv"

dotenv.config();

export default function Header() {
    return (
		<div>
			<h1>
				<a href="http://localhost:3000">
					Suricator
				</a>	
			</h1>
		</div>
	);
}