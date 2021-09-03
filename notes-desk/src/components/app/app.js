import { useState, useEffect } from "react";
import api from "../../util/api";
import TodoList from "../../TodoList";
import Board from "../board/board.js";

import "./app.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    api.get().then(({ data }) => setNotes(data));
  }, []);

  // function onTodoClick(todo) {
  //   api
  //     .put(`/${todo.id}`, { ...todo, isDone: !todo.isDone })
  //     .then(({ data }) =>
  //       setNotes(notes.map((item) => (item.id === todo.id ? data : item)))
  //     );
  // }

  function addEmptyNote() {
    api
      .post("", {
        title: "",
        isDone: false,
        x: 0,
        y: 0,
      })
      .then(({ data }) => setNotes([...notes, data]));
  }

  const onNoteSave = (note) => {
    api
      .put(`/${note.id}`, { ...note })
      .then(({ data }) =>
        setNotes(notes.map((item) => (item.id === note.id ? data : item)))
      );
  };

  const onNoteDelete = (id) => {
    api.delete(`/${id}`).then(() => {
      setNotes(notes.filter((item) => item.id !== id));
    });
  };

  const onChange = (id, { x, y }) => {
    const findNote = notes.find((v) => v.id === id);
    const newPositions = notes.map((item) => {
      return item.id !== id ? item : { ...item, x, y };
    });
    setNotes(newPositions);
  };

  return (
    <div className="App">
      <button type="button" onClick={addEmptyNote}>
        +
      </button>
      <Board
        notes={notes}
        onNoteClick={() => {}}
        onNoteDelete={onNoteDelete}
        onChange={onChange}
        onNoteSave={onNoteSave}
      ></Board>
    </div>
  );
}

export default App;
