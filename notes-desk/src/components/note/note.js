import { useState } from "react";
import "./note.scss";

const Note = ({ note, onNoteSave, onNoteDelete }) => {
  const [editing, onEditing] = useState(false);
  const [value, onValueChange] = useState(note.title);
  return (
    <div
      className="note"
      onDragStart={() => console.log("start")}
      onDragEnd={() => console.log("end")}
    >
      <div className="note__wrap">
        {editing ? (
          <textarea
            className="note__textarea"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            autoFocus
            onBlur={() => {
              onEditing(false);
              onNoteSave({ ...note, title: value });
            }}
          ></textarea>
        ) : (
          <div className="note__item" onDoubleClick={() => onEditing(true)}>
            {note.title}
          </div>
        )}
        <button className="note__btn" onClick={() => onNoteDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;

// const TodoItem = ({item, onClick}) => {
//     return (
//         <li style={getStyles(item)} onClick={onClick.bind(null, item)}>
//             {item.title}
//         </li>
//     );
// }

// export default TodoItem;

// const getStyles = (item) => {
//     return({
//         backgroundColor: item.isDone ? "green" : "red"
//     });
// }
