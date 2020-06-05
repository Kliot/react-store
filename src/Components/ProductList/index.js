import React, { useState } from "react";

import { ProductItem } from "../";

const data = [
   {
      id: 1,
      title: "шарик",
      desc: "ifhbrrrr",
      price: 12,
      image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
   },
   {
      id: 2,
      title: "футболка",
       desc: "ifhbrrrr",
       price: 15,
      image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
   },
   {
      id: 4,
      title: "шарик 2",
       desc: "ifhbrrrr",
       price: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
   }
]

const ProductList = () => {
  
	return (
		<div className="llkl">
		{data.map(product => (

			<ProductItem key={product.id} {...product} />
		))}
		</div>
	);
};

export default ProductList;