import * as actionTypes from "./types";

export const setUser = (data) => ({
    type: actionTypes.SET_DETAILS,
    data,
});

export const verifyUser = (data) => ({
    type: actionTypes.VERIFY_USER,
    data,
});
