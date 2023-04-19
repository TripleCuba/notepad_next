import React from "react";
import { ListElementType } from "./ListElement";
import element from "@/styles/allNotes/toDo/element.module.scss";
import { deleteElement } from "@/utils/apiCalls/toDoCalls";
import { MdEdit, MdDelete } from "react-icons/md";

const EditDeleteButtons = ({
  item,
  listId,
  handleEditTrigger,
  setInitialRender,
}: {
  item: ListElementType;
  listId: string;
  handleEditTrigger: (itemToEdit: ListElementType) => void;
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const deleteListElement = async (item: ListElementType) => {
    const resp = await deleteElement(item._id, listId);
    setInitialRender(false);
  };
  return (
    <div className={element.buttonContainer}>
      <button
        onClick={() => handleEditTrigger(item)}
        className={element.iconButton}
      >
        <MdEdit className={element.icon} />
      </button>
      <button
        onClick={() => deleteListElement(item)}
        className={element.iconButton}
      >
        <MdDelete className={element.icon} />
      </button>
    </div>
  );
};

export default EditDeleteButtons;
