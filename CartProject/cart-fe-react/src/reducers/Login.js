import * as types from '../consts/ActionType';

let initialState = {
    message: '',
    note: false
};

let Login = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LOGIN_STATUS:{
            state = {
                message: action.message,
                note: action.note,
            };
            return state;
        }
        default: return state
    }
};

export default Login;