import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Favicon from "react-favicon";
import { Provider } from "react-redux";
import Store from "./store/Store";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
	<div>
		<Provider store={Store}>
			<Favicon url="./images/favicon.ico" />
			<App />
		</Provider>
	</div>,
	document.getElementById("root")
);
