import React from "react";
import { NoteType } from "../AllElements/Notes";
import { MdOutlineStarOutline, MdStar, MdEdit, MdDelete } from "react-icons/md";
import main from "@/styles/allNotes/main.module.scss";
import { deleteNote, editNote } from "@/utils/apiCalls/apiCall";

const NoteSidebar = ({
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
  const handleDelete = async (item: NoteType) => {
    const resp = await deleteNote(item._id);
    setInitialRender(true);
  };
  return (
    <div className={main.sidebar}>
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
      <MdEdit />
      <MdDelete
        className={main.deleteIcon}
        onClick={() => handleDelete(note)}
      />
    </div>
  );
};

export default NoteSidebar;
