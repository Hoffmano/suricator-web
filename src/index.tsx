import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Favicon from "react-favicon";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<div>
		<Provider store={store}>
			<Favicon url="./images/favicon.ico" />
			<App />
		</Provider>
	</div>,
	document.getElementById("root")
);
