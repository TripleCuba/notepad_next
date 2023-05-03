import React from "react";
import notesList from "@/styles/allNotes/notesList.module.scss";
import { NoteType } from "./Notes";

const NoteHead = ({ note }: { note: NoteType }) => {
  return (
    <div className={notesList.noteHead}>
      <h3 className={notesList.title}>{note.title}</h3>
    </div>
  );
};

export default NoteHead;
