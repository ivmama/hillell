import React from "react";

class TodoItem extends React.Component {
    render() {
        // <li className="editing">
        //     <div className="view">
        //         <input className="toggle" type="checkbox"/>
        //         <label>test</label>
        //         <button className="destroy"></button>
        //     </div>
        //     <input className="edit"/>
        // </li>
        const { item, onItemDeleted, toggleTodo } = this.props;
        return (

            <li className={item.completed ? 'completed' : ''}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={item.completed}
                        value={item.completed}
                        onChange={() => toggleTodo(item.id)} />
                    <label>{item.title}</label>
                    <button className="destroy" onClick={onItemDeleted}></button>
                </div>
            </li>
        );
    }
}

export default TodoItem;