import React from "react";
import main from "@/styles/allNotes/main.module.scss";
import { NoteType } from "../AllElements/Notes";

const NoteHead = ({ note }: { note: NoteType }) => {
  return (
    <div className={main.noteHead}>
      <h3 className={main.title}>{note.title}</h3>
    </div>
  );
};

export default NoteHead;
