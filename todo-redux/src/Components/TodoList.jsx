import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { getItems } from "../store/actions";
class TodoList extends React.Component {


    render() {
        const { todos, toggleTodo, toggleAll, onItemDeleted, selectedAll,
            onItemValueChange, getItems} = this.props;
        console.log(todos)
        // console.log(getItems)
        return (
            <section className="main" style={{ display: "block" }}>
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    checked={selectedAll}
                    onChange={() => toggleAll()} />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        todos.map(
                            (item, idx) =>
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    // onItemValueChange={onItemValueChange} toggleTodo={toggleTodo}
                                    // onItemDeleted={() => onItemDeleted(idx)}
                                />
                        )
                    }
                </ul>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

// const mapDispatchToProps = {
//     getItems
// }

export default connect(mapStateToProps)(TodoList);