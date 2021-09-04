export const ACTION_ADD_ITEM = "ADD_NEW_ITEM";
export const ACTION_DELETE_ITEM = "DELETE_ITEM";
export const ACTION_UPDATE_FILTER = "UPDATE_FILTER";
export const ACTION_UPDATE_TITLE = "UPDATE_TITLE";
export const ACTION_TOGGLE_ITEM = "TOGGLE_ITEM";
export const ACTION_GET_ALL_ITEM = "GET_ALL_ITEM";

const initialState = {
  todos: [],
  filter: "all",
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(state.todos);
  switch (type) {
    case ACTION_GET_ALL_ITEM:
      return state.todos;
    case ACTION_ADD_ITEM:
      console.log(1);
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: payload, completed: false },
        ],
      };
    case ACTION_DELETE_ITEM:
      return { ...state, todos: state.todos.filter((v) => v.id !== payload) };
    case ACTION_UPDATE_FILTER:
      return { ...state, filter: payload };
    case ACTION_UPDATE_TITLE:
      const { id, title } = payload;
      return {
        ...state,
        todos: state.todos.map((v) => (v.id !== id ? { ...v, title } : v)),
      };
    case ACTION_TOGGLE_ITEM:
      console.log(1);
      console.log(payload)
      return {
        ...state,
        todos: state.todos.map((v) =>
          v.id === payload ? { ...v, completed: !v.completed } : v
        ),
      };
    default:
      return state;
  }
};

export default reducer;
