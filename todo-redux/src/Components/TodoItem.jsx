import { useState } from "react";

const TodoItem = ({ item, deleteTodo, toggleTodo, updateTitle }) => {
  const [editing, onEditing] = useState(false);
  const [value, onValueChange] = useState("");

  const saveChanges = () => {
    updateTitle(item.id, value);
    onEditing(false);
  };

  if (editing) {
    return (
      <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>test</label>
          <button className="destroy"></button>
        </div>
        <input
          autoFocus
          className="edit"
          value={value}
          onBlur={saveChanges}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </li>
    );
  } else {
    return (
      <li className={item.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.completed}
            value={item.completed}
            onChange={() => toggleTodo(item.id)}
          />
          <label
            onDoubleClick={() => {
              onEditing(true);
              onValueChange(item.title);
            }}
          >
            {item.title}
          </label>
          <button
            className="destroy"
            onClick={() => deleteTodo(item.id)}
          ></button>
        </div>
      </li>
    );
  }
};

export default TodoItem;
