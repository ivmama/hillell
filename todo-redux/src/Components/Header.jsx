import { useState } from "react";
import { addTodo } from "../store/actions";
import { connect } from "react-redux";
const Header = ({ addTodo }) => {
  const [value, onValueChange] = useState("");

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo(value);
      onValueChange("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        onKeyPress={onKeyPress}
      />
    </header>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
