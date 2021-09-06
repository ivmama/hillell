import {
  ACTION_ADD_ITEM,
  ACTION_DELETE_ITEM,
  ACTION_UPDATE_FILTER,
  ACTION_UPDATE_TITLE,
  ACTION_TOGGLE_ITEM,
  ACTION_TOOGLE_ALL,
} from "../reducers";

export const addTodo = (title) => ({
  type: ACTION_ADD_ITEM,
  payload: { id: Date.now(), title, completed: false },
});

export const deleteTodo = (id) => ({ type: ACTION_DELETE_ITEM, payload: id });

export const updateFilter = (filter) => ({
  type: ACTION_UPDATE_FILTER,
  payload: filter,
});

export const toggleTodo = (id) => ({ type: ACTION_TOGGLE_ITEM, payload: id });

export const updateTitle = (id, title) => ({
  type: ACTION_UPDATE_TITLE,
  payload: { id, title },
});

export const toggleAll = (completed) => ({
  type: ACTION_TOOGLE_ALL,
  payload: completed,
});
