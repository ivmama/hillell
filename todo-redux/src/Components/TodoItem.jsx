import { useState } from "react";
import { connect } from "react-redux";
import {
    updateTitle, deleteTodo,
    toggleTodo,
} from "../store/actions";
const TodoItem = ({ item, onItemDeleted, deleteTodo,
    toggleTodo, updateTitle }) => {

    const [editing, onEditing] = useState(false);
    const [value, onValueChange] = useState("");

    const saveChanges = () => {
        updateTitle({ id: item.id, title: value });
        onEditing(false);
    }

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
        )
    }
    else {
        return (
            <li className={item.completed ? 'completed' : ''}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={item.completed}
                        value={item.completed}
                        onChange={() => toggleTodo(item.id)} />
                    <label onDoubleClick={() => {
                        onEditing(true);
                        onValueChange(item.title)
                    }}>{item.title}</label>
                    <button className="destroy" onClick={() => deleteTodo(item.id)}></button>
                </div>
            </li>
        )
    }

}


const mapStateToProps = (state) => {
    return { todos: state.todos }
}

const mapDispatchToProps = {
    updateTitle,
    deleteTodo,
    toggleTodo,
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);