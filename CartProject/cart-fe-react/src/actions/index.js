import * as types from '../consts/ActionType';

export const saveStatus = (status) => {
    return{
        type: types.SAVE_LOGIN_STATUS,
        message: status.message,
        note: status.note,
    }
};

export const getProducts = (products) => {
    return{
        type: types.GET_PRODUCTS_API,
        products: products,
    }
};

export const setMessage = (message) => {
    return{
        type: types.SET_MESSAGE,
        message
    }
};

export const clearMessage = (message) => {
    return{
        type: types.SET_MESSAGE,
    }
};