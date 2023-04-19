import { getAllNotes } from "@/utils/apiCalls/apiCall";
import main from "@/styles/allNotes/main.module.scss";

import React, { useState, useEffect } from "react";
import NoteContent from "./NoteContent";
type Note = { title: string; content: string; category: string; _id: string };
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const initialHover = { content: "", index: NaN };
  const [hoveredContent, setHoveredContent] = useState(initialHover);

  const handleHover = (content: string, index: number) => {
    let newContent =
      content.length <= 200 ? content : `${content.slice(0, 200)}...`;
    setHoveredContent({ content: newContent, index: index });
  };
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
          notes.map((note: Note, index) => (
            <li
              onMouseOver={() => handleHover(note.content, index)}
              onMouseOut={() => setHoveredContent(initialHover)}
              key={note._id}
              className={
                note.content.length > 100 ? main.hoveredElement : main.element
              }
            >
              <h3 className={main.title}>{note.title}</h3>
              <NoteContent
                content={note.content}
                index={index}
                hoveredContent={hoveredContent}
              />

              <p className={main.category}>{note.category}</p>
            </li>
          ))
        ) : (
          <h3>There is no notes</h3>
        )}
      </ul>
    </div>
  );
};

export default Notes;
