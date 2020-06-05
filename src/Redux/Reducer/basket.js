import { ADD_PRODUCT_TO_BASKET, GET_PRODUCT_IN_BASKET } from "../Action/types"
const initialState = {
	basketCount: 0,
	cartCost: 0,
	inCart: false,
	data: []
}

const basket = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PRODUCT_TO_BASKET: 
		console.log({...state})
			return {
				basketCount: state.basketCount + 1,
				cartCost: state.cartCost + action.payload.price,
				data: action.payload,
				inCart: true
			}
		case GET_PRODUCT_IN_BASKET: 
			return {
				...state
			}
		default: 
			return state;
	}
}

export default basket