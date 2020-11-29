import React from "react";
import dotenv from "dotenv";
import "../styles/Footer.css"

dotenv.config();

export default function Footer() {
    return (
		<footer>
			<div className="container pt-5 pb-5">
                <div className="row">
                    <a href="/" className="logo">
                        <img className="logo pl-2" src="/meerkat.svg" alt="Logo Suricator"/>
                        Suricator
                    </a>
                </div>
            </div>
            <div id="copyright" className="justify-content-center text-center pt-4 pb-2">
                <p>© Suricator 2020. Todos os direitos reservados.</p>
            </div>
		</footer>
	);
}