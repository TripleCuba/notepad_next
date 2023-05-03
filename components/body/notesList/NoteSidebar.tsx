import React from "react";
import { NoteType } from "./Notes";
import { MdOutlineStarOutline, MdStar, MdEdit, MdDelete } from "react-icons/md";
import notesList from "@/styles/allNotes/notesList.module.scss";
import { deleteNote, editNote } from "@/utils/apiCalls/apiCall";
import { useRouter } from "next/router";

const NoteSidebar = ({
  note,
  setInitialRender,
}: {
  note: NoteType;
  setInitialRender: (value: React.SetStateAction<boolean>) => void;
}) => {
  const router = useRouter();
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
    <div className={notesList.sidebar}>
      {note.isFavorite ? (
        <MdStar
          className={notesList.favoriteIconClicked}
          onClick={() => handleFavorite(note)}
        />
      ) : (
        <MdOutlineStarOutline
          className={notesList.favoriteIcon}
          onClick={() => handleFavorite(note)}
        />
      )}
      <MdEdit onClick={() => router.push(`allNotes/note/${note._id}`)} />
      <MdDelete
        className={notesList.deleteIcon}
        onClick={() => handleDelete(note)}
      />
    </div>
  );
};

export default NoteSidebar;
