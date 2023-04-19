import { getAllNotes } from "@/utils/apiCalls/apiCall";
import main from "@/styles/allNotes/main.module.scss";

import React, { useState, useEffect } from "react";
import Note from "../note/Note";

export type NoteType = {
  title: string;
  content: string;
  category: string;
  _id: string;
  isFavorite: boolean;
  date: Date;
};
const Notes = () => {
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    const resp = await getAllNotes();
    setNotes(resp);
    console.log(resp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={main.container}>
      <div className={main.head}>
        <h1>Notes</h1>
      </div>
      <ul className={main.list}>
        {notes.length ? (
          notes.map((note: NoteType, index) => (
            <Note note={note} key={index} getData={getData} />
          ))
        ) : (
          <h3>There is no notes</h3>
        )}
      </ul>
    </div>
  );
};

export default Notes;
