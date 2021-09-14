import React from "react";
import TodoItem from "./TodoItem";
import { Filter } from "../utils/filter";
import { connect } from "react-redux";
import {
  updateTitle,
  deleteTodo,
  toggleTodo,
  updateFilter,
  toggleAll,
} from "../store/actions";

const filterItems = (items, filter) => {
  switch (filter) {
    case Filter.all:
      return items;
    case Filter.active:
      return items.filter(({ completed }) => !completed);
    case Filter.completed:
      return items.filter(({ completed }) => completed);
    default:
      return items;
  }
};

const TodoList = ({
  todos,
  filter,
  toggleAll,
  selectedAll,
  updateTitle,
  deleteTodo,
  toggleTodo,
}) => {
  const getIsAllItemsSelected = (todos) => {
    return todos.every(({ completed }) => completed);
  };
  return (
    <section className="main" style={{ display: "block" }}>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={getIsAllItemsSelected(todos)}
        onChange={() => toggleAll(getIsAllItemsSelected(todos))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filterItems(todos, filter).map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            updateTitle={updateTitle}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.filter };
};

const mapDispatchToProps = {
  updateTitle,
  deleteTodo,
  toggleTodo,
  updateFilter,
  toggleAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
