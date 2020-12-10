import React from "react";
import dotenv from "dotenv";
import "../styles/Footer.css";

dotenv.config();

export default function Footer() {
	return (
		<footer>
			<div className="justify-content-center text-center pt-4 pb-2">
				<div className="row d-flex justify-content-center">
					<a href="/" className="logo">
						<img
							className="logo pl-2"
							src="/meerkat.svg"
							alt="Logo Suricator"
						/>
						Suricator
					</a>
				</div>
			</div>

			<div
				id="copyright"
				className="justify-content-center text-center pt-4 pb-2"
			>
				<div className="justify-content-center text-center pt-4 pb-2">
					Icons made by{" "}
					<a
						href="https://www.flaticon.com/authors/freepik"
						title="Freepik"
						style={{ color: "black" }}
					>
						Freepik
					</a>{" "}
					from{" "}
					<a
						href="https://www.flaticon.com/"
						title="Flaticon"
						style={{ color: "black" }}
					>
						www.flaticon.com
					</a>
				</div>
				<p>© Suricator 2020. Todos os direitos reservados.</p>
			</div>
		</footer>
	);
}
