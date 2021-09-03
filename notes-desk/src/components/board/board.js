import Note from "../note/note.js";
import "./board.scss"
const Board = ({ notes, value, onNoteSave, onNoteDelete, onChange }) => {
  console.log(notes)
  return (
    <div className="board">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            note={note}
            onNoteSave={onNoteSave}
            value={value}
            onChange={onChange}
            onNoteDelete={onNoteDelete}
          />
        );
      })}
    </div>
  );
};

export default Board;
