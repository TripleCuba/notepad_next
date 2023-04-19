import React, { useState } from "react";
import main from "@/styles/allNotes/main.module.scss";

const NoteContent = ({
  content,
  key,
  hoveredContent,
}: {
  content: string;
  key: number;
  hoveredContent: { content: string; key: number };
}) => {
  return (
    <div>
      {content.length > 100 ? (
        <p className={main.content}>
          {hoveredContent && hoveredContent.key === key
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
