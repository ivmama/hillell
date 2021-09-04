import {
  ACTION_ADD_ITEM,
  ACTION_DELETE_ITEM,
  ACTION_UPDATE_FILTER,
  ACTION_UPDATE_TITLE,
  ACTION_TOGGLE_ITEM,
  ACTION_GET_ALL_ITEM
} from "../reducers";

export const addTodo = (payload) => ({ type: ACTION_ADD_ITEM, payload });

export const deleteTodo = (payload) => ({ type: ACTION_DELETE_ITEM, payload });

export const updateFilter = () => ({ type: ACTION_UPDATE_FILTER });

export const toggleTodo = (payload) => ({ type: ACTION_TOGGLE_ITEM , payload});

export const updateTitle = (payload) => ({ type: ACTION_UPDATE_TITLE, payload});

export const getItems = () => ({ type: ACTION_GET_ALL_ITEM});

// export const add = (payload) => ({ type: ACTION_ADD, payload });
