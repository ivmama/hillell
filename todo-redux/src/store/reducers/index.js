import { Filter } from "../../utils/filter.js";

export const ACTION_ADD_ITEM = "ADD_NEW_ITEM";
export const ACTION_DELETE_ITEM = "DELETE_ITEM";
export const ACTION_UPDATE_FILTER = "UPDATE_FILTER";
export const ACTION_UPDATE_TITLE = "UPDATE_TITLE";
export const ACTION_TOGGLE_ITEM = "TOGGLE_ITEM";
export const ACTION_TOOGLE_ALL = "TOGGLE_ALL";
export const ACTION_GET_ALL_ITEM = "GET_ALL_ITEM";
export const ACTION_CLEAR_ALL = "CLEAR_ALL";

const initialState = {
  todos: [],
  filter: Filter.all,
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(state.todos);
  switch (type) {
    case ACTION_GET_ALL_ITEM:
      return state.todos;
    case ACTION_ADD_ITEM:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case ACTION_DELETE_ITEM:
      return { ...state, todos: state.todos.filter((v) => v.id !== payload) };
    case ACTION_UPDATE_FILTER:
      return { ...state, filter: payload };
    case ACTION_UPDATE_TITLE:
      const { id, title } = payload;
      return {
        ...state,
        todos: state.todos.map((v) => (v.id === id ? { ...v, title } : v)),
      };
    case ACTION_TOGGLE_ITEM:
      return {
        ...state,
        todos: state.todos.map((v) =>
          v.id === payload ? { ...v, completed: !v.completed } : v
        ),
      };
    case ACTION_TOOGLE_ALL:
      return {
        ...state,
        todos: state.todos.map((v) => ({ ...v, completed: !payload })),
      };
    case ACTION_CLEAR_ALL:
      return {
        ...state,
        todos: state.todos.filter((v) => !v.completed),
      };
    default:
      return state;
  }
};

export default reducer;
