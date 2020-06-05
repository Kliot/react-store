import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getBasketCount } from "../../Redux/Action/getActionBasket"
import { Link } from "react-router-dom";
//import "./HeaderBlock.scss";

const Nav = (props) => {
	//console.log(props);
	useEffect(() => {
		getBasketCount();
	}, [])
	return (
		<header>
			<h3>Nav</h3>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/cart">Cart 	<span>{props.getBasketProps}</span></Link></li>
			</ul>
		</header>
	);
}

const mapStateToProps = state => ({
	basketProps: state.basketState
})

export default connect(mapStateToProps, { getBasketCount })(Nav);