import React from "react";
import { ListElementType } from "./ListElement";
import toDoListElement from "@/styles/allNotes/toDo/toDoListElement.module.scss";
import { deleteElement } from "@/utils/apiCalls/toDoCalls";

const EditDeleteButtons = ({
  item,
  handleEditTrigger,
  setInitialRender,
}: {
  item: ListElementType;
  handleEditTrigger: (itemToEdit: ListElementType) => void;
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const deleteListElement = async (item: ListElementType) => {
    const resp = await deleteElement(item._id);
    setInitialRender(false);
  };
  return (
    <div className={toDoListElement.editDelete}>
      <button onClick={() => handleEditTrigger(item)}>Edit</button>
      <button onClick={() => deleteListElement(item)}>Delete</button>
    </div>
  );
};

export default EditDeleteButtons;
