import * as actionTypes from "../actions/types";

const initialState = {
    email: "",
    name: "",
    profession: "",
    password: "",
    phone: "",
    validated: false,
};

const set = (state, action) => {
    return {
        ...state,
        ...action.data,
    };
};
const verify = (state, action) => {
    const { name, password } = action.data;

    if (state.name === name && state.password === password) {
        return { ...state, validated: true };
    } else {
        return state;
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DETAILS:
            return set(state, action);
        case actionTypes.VERIFY_USER:
            return verify(state, action);
        default:
            return state;
    }
};
export default reducer;
