import React, { useState } from "react";
import main from "@/styles/allNotes/main.module.scss";

const NoteContent = ({
  content,
  index,
  hoveredContent,
}: {
  content: string;
  index: number;
  hoveredContent: { content: string; index: number };
}) => {
  return (
    <div>
      {content.length > 100 ? (
        <p className={main.content}>
          {hoveredContent && hoveredContent.index === index
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
