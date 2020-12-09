import {combineReducers} from "redux";
import Login from './Login';
import Product from './Product';
import Message from './AppMessage';

const myReducer = combineReducers({
    Login,
    Product: Product,
    Message: Message,
});

export default myReducer;