import React from "react";
import { NoteType } from "./Notes";
import notesList from "@/styles/allNotes/notesList.module.scss";

const NoteFooter = ({ note }: { note: NoteType }) => {
  let modDate = new Date(note.date);
  let newDate = modDate.toLocaleDateString();
  let newTime = modDate.toLocaleTimeString().slice(0, -3);

  return (
    <div className={notesList.noteFoot}>
      <p className={notesList.category}>
        {note.category ? note.category : "-"}
      </p>
      <div className={notesList.date}>
        <p>{newDate}</p>
        <p>{newTime}</p>
      </div>
    </div>
  );
};

export default NoteFooter;
