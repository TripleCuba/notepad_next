import React from "react";
import singleNote from "@/styles/allNotes/singleNote.module.scss";
import { NoteType } from "../../notesList/Notes";
import { MdOutlineStarOutline, MdStar } from "react-icons/md";
import { editNote } from "@/utils/apiCalls/apiCall";

const NoteHeader = ({
  note,
  setInitialState,
}: {
  note: NoteType;
  setInitialState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleFavorite = async (data: NoteType) => {
    data.isFavorite ? (data.isFavorite = false) : (data.isFavorite = true);
    try {
      const resp = await editNote(data);
      console.log(resp);
      setInitialState(true);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  return (
    <div className={singleNote.noteHeader}>
      <h1>{note.title}</h1>
      <div className={singleNote.iconContainer}>
        {note.isFavorite ? (
          <MdStar
            className={singleNote.starFavorite}
            onClick={() => handleFavorite(note)}
          />
        ) : (
          <MdOutlineStarOutline
            className={singleNote.star}
            onClick={() => handleFavorite(note)}
          />
        )}
      </div>
    </div>
  );
};

export default NoteHeader;
