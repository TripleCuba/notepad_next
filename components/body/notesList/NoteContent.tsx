import React from "react";
import notesList from "@/styles/allNotes/notesList.module.scss";

const NoteContent = ({
  content,
  id,
  hoveredContent,
}: {
  content: string;
  id: string;
  hoveredContent: { content: string; id: string };
}) => {
  return (
    <div>
      {content.length > 100 ? (
        <p className={notesList.content}>
          {hoveredContent && hoveredContent.id === id
            ? hoveredContent.content
            : `${content.slice(0, 100)}...`}
        </p>
      ) : (
        <p className={notesList.content}>{content}</p>
      )}
    </div>
  );
};

export default NoteContent;
