import Note from "../note/note.js";

const Board = ({ notes, value, onNoteSave, onNoteDelete }) => {
  return (
    <div className="board">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            note={note}
            onNoteSave={onNoteSave}
            value={value}
            onNoteDelete={onNoteDelete}
          />
        );
      })}
    </div>
  );
};

export default Board;
