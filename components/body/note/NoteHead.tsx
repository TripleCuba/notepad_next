import React from "react";
import { MdOutlineStarOutline, MdStar } from "react-icons/md";
import main from "@/styles/allNotes/main.module.scss";
import { NoteType } from "../AllElements/Notes";
import { editNote } from "@/utils/apiCalls/apiCall";

const NoteHead = ({
  note,
  setInitialRender,
}: {
  note: NoteType;
  setInitialRender: (value: React.SetStateAction<boolean>) => void;
}) => {
  const handleFavorite = async (data: NoteType) => {
    data.isFavorite ? (data.isFavorite = false) : (data.isFavorite = true);
    try {
      const resp = await editNote(data);
    } catch (err) {
      alert(err);
    }
    setInitialRender(true);
  };
  return (
    <div className={main.noteHead}>
      <h3 className={main.title}>{note.title}</h3>
      {note.isFavorite ? (
        <MdStar
          className={main.favoriteIconClicked}
          onClick={() => handleFavorite(note)}
        />
      ) : (
        <MdOutlineStarOutline
          className={main.favoriteIcon}
          onClick={() => handleFavorite(note)}
        />
      )}
    </div>
  );
};

export default NoteHead;
