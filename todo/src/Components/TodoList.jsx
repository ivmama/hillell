import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {


    render() {
        const { todos, toggleTodo, toggleAll, onItemDeleted, selectedAll } = this.props;
        return (
            <section className="main" style={{ display: "block" }}>
                <input id="toggle-all" className="toggle-all" type="checkbox" checked={selectedAll} onChange={() => toggleAll()} />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        todos.map(
                            (item, idx) =>
                                <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} onItemDeleted={() => onItemDeleted(idx)} />
                        )
                    }
                </ul>
            </section>
        );
    }
}

export default TodoList;