import React, { useState } from "react";
import NoteContent from "./NoteContent";
import { NoteType } from "../AllElements/Notes";
import main from "@/styles/allNotes/main.module.scss";
import NoteHead from "./NoteHead";
import NoteFooter from "./NoteFooter";

const Note = ({
  note,
  key,
  getData,
}: {
  note: NoteType;
  key: number;
  getData: () => Promise<void>;
}) => {
  const initialHover = { content: "", key: NaN };
  const [hoveredContent, setHoveredContent] = useState(initialHover);
  const handleHover = (content: string, key: number) => {
    let newContent =
      content.length <= 200 ? content : `${content.slice(0, 200)}...`;
    setHoveredContent({ content: newContent, key: key });
  };

  return (
    <li
      onMouseOver={() => handleHover(note.content, key)}
      onMouseOut={() => setHoveredContent(initialHover)}
      key={note._id}
      className={note.content.length > 100 ? main.hoveredElement : main.element}
    >
      <NoteHead getData={getData} note={note} />
      <NoteContent
        content={note.content}
        key={key}
        hoveredContent={hoveredContent}
      />
      <NoteFooter note={note} />
    </li>
  );
};

export default Note;
