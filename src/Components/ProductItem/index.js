import React, { useState } from "react";
import { connect } from "react-redux";
import { addBasket } from "../../Redux/Action/basket";
import { Link } from 'react-router-dom';

//import "./HeaderBlock.scss";

const ProductItem = (props) => {
	//console.log(props);
	return (
		<div className="product__item">
			<Link to={`/goods/${props.id}`}>
		      <h2>{props.title}</h2>
		    </Link>
		    <div className="product__desc">
		    	{props.desc}
		    </div>
		    <button onClick={() => props.addBasket(props)} type="button" className="addToCard">Buy</button>
		</div>
	);
}

//export default ProductItem;
export default connect(null, { addBasket })(ProductItem);