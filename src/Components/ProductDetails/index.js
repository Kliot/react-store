import React from "react";
import { Link } from "react-router-dom";

//import "./HeaderBlock.scss";

const ProductItem = ({title, desc, id}) => {
	const clickCard = () => {

	}
	return (
		<div className="product">
		<div className="product__item">
		    <div className="product__desc">
		    	{desc}
		    </div>
		    <button type="button" className="addToCard">Buy</button>
		</div>
		</div>
	);
}

export default ProductItem;