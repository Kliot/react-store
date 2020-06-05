import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HeaderBlock } from "./Components";
import { ProductDetails } from "./Components";
import { AddProductForm } from "./Components";
import { NotFound } from "./Components";
import { ProductList } from "./Components";
import { Nav } from "./Components";
import { Cart } from "./Components";

const App = () => {
	return (
		<div className="App">
			<HeaderBlock 
				title="New"
				desc="desc"
			/>
			<button type="button" className="addProduct">Add Product</button>
			<Router>
				<Nav/>
				<div>
					<Switch>
						<Route path="/" component={ProductList} exact />
						<Route path="/cart" component={Cart} exact />
						<Route path="/goods/:id" component={ProductDetails} exact />
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default App;
