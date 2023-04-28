import React, { useState } from "react";
import main from "@/styles/allNotes/main.module.scss";

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
        <p className={main.content}>
          {hoveredContent && hoveredContent.id === id
            ? hoveredContent.content
            : `${content.slice(0, 100)}...`}
        </p>
      ) : (
        <p className={main.content}>{content}</p>
      )}
    </div>
  );
};

export default NoteContent;
