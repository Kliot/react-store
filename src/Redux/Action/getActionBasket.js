import { GET_PRODUCT_IN_BASKET } from "./types";

export const getBasketCount = () => {
	return(dispatch) => {
		//console.log("getting all basket");
		dispatch({
			type: GET_PRODUCT_IN_BASKET
		})
	}
}
