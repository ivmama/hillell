import {ACTION_ADD, ACTION_DECREMENT, ACTION_INCREMENT} from "../reducers";

export const increment = () => ({type: ACTION_INCREMENT});

export const decrement = () => ({type: ACTION_DECREMENT});

export const add = (payload) => ({type: ACTION_ADD, payload});