import * as types from '../consts/ActionType'

const initialState = {
    message: ""
};

const Message = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MESSAGE: {
            state = {
                message: action.message
            };
            return state;
        };
        case types.CLEAR_MESSAGE: {
            state = initialState
            return state;
        }
        default: return state;
    }
};

export default Message;