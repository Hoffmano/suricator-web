//Aqui é onde adiciona novas paginas ao site
//Os nomes dos componentes são declarados nos arquivos da pagina pages


import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/lyrics" component={Lyrics} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes