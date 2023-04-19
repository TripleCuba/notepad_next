import React from "react";
import { NoteType } from "../AllElements/Notes";
import main from "@/styles/allNotes/main.module.scss";

const NoteFooter = ({ note }: { note: NoteType }) => {
  let modDate = new Date(note.date);
  let newDate = modDate.toLocaleDateString();
  let newTime = modDate.toLocaleTimeString().slice(0, -3);

  return (
    <div className={main.noteFoot}>
      <p className={main.category}>{note.category ? note.category : "-"}</p>
      <div className={main.date}>
        <p>{newDate}</p>
        <p>{newTime}</p>
      </div>
    </div>
  );
};

export default NoteFooter;
