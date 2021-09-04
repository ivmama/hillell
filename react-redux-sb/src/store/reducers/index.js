export const ACTION_INCREMENT = "INCREMENT";
export const ACTION_DECREMENT = "DECREMENT";
export const ACTION_ADD = "ADD";

const initialState = {
    value: 0
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ACTION_INCREMENT:
            return {...state, value: state.value + 1};
        case ACTION_DECREMENT:
            return {...state, value: state.value - 1};
        case ACTION_ADD:
            return {...state, value: state.value + payload};
        default: 
            return state;
    }
}

export default reducer;