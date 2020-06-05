import React from "react";
import { connect } from "react-redux";


const Cart = ({basketProps}) => {
	console.log(basketProps);

	let productsInCart= [];

	Object.keys(basketProps.data).forEach(function(item){
		console.log(item);
	}) 

	productsInCart = productsInCart.map( (product, index) => {
		console.log(product);

	})

	return (
		<div>
			<h3>Cart</h3>
				<div className="product__item">
				      <h2>{basketProps.data.title}</h2>
				    <div className="product__desc">
				    	{basketProps.data.desc}
				    </div>
				    </div>
		</div>
	);
}

const mapStateToProps = state => ({
	basketProps: state.basketState
});


export default connect(mapStateToProps)(Cart);