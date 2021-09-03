import { useState } from "react";
import "./note.scss";

const Note = ({ note, onNoteSave, onNoteDelete, onChange }) => {
  // console.log(note)
  let prevPosition = { x: 0, y: 0 };
  const [editing, onEditing] = useState(false);
  const [value, onValueChange] = useState(note.title);
  function getNotePosition() {
    const { x, y } = note;
    // console.log(x, y)
    return {
      top: y,
      left: x,
    };
  }

  function startDrag(e) {
    prevPosition = {
      x: e.clientX,
      y: e.clientY,
    };
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
  }

  function stopDrag(e) {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
  }

  function drag(e) {
    const { x, y } = note;
    onChange(note.id, {
      x: x + (e.clientX - prevPosition.x),
      y: y + (e.clientY - prevPosition.y),
    });
  }
  function SaveNote() {
    onNoteSave(note);
  }

  return (
    <div
      className="note"
      onMouseDown={(e) => startDrag(e)}
      onMouseUp={(e) => SaveNote()}
      onDragStart={() => false}
      style={getNotePosition()}
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
