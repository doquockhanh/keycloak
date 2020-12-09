import * as types from "../consts/ActionType";

let initialState = {
    products: [{
        id: 1,
        name: "iphone",
        price: 1000,
    }],
};

let Product = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_API: {
            state = {
                products: action.products
            };
            console.log(state);
            return state;
        }
        default: return state
    }
};

export default Product;