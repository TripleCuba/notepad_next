import React, { useState } from "react";
import NoteContent from "./NoteContent";
import { NoteType } from "../AllElements/Notes";
import main from "@/styles/allNotes/main.module.scss";
import NoteHead from "./NoteHead";
import NoteFooter from "./NoteFooter";
import NoteSidebar from "./NoteSidebar";

const Note = ({
  note,
  setInitialRender,
}: {
  note: NoteType;
  setInitialRender: (value: React.SetStateAction<boolean>) => void;
}) => {
  const initialHover = { content: "", id: "" };
  const [hoveredContent, setHoveredContent] = useState(initialHover);
  const handleHover = (content: string, id: string) => {
    let newContent =
      content.length <= 200 ? content : `${content.slice(0, 200)}...`;
    setHoveredContent({ content: newContent, id: id });
  };

  return (
    <li
      onMouseOver={() => handleHover(note.content, note._id)}
      onMouseOut={() => setHoveredContent(initialHover)}
      className={note.content.length > 100 ? main.hoveredElement : main.element}
    >
      <div className={main.body}>
        <div className={main.mainContent}>
          <NoteHead note={note} />
          <NoteContent
            content={note.content}
            id={note._id}
            hoveredContent={hoveredContent}
          />
        </div>
        <NoteSidebar note={note} setInitialRender={setInitialRender} />
      </div>
      <NoteFooter note={note} />
    </li>
  );
};

export default Note;
