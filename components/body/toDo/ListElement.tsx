import React, { useState } from "react";
import element from "@/styles/allNotes/toDo/element.module.scss";
import ListContent from "./ListContent";
import EditElement from "./EditElement";
import EditDeleteButtons from "./EditDeleteButtons";
export type ListElementType = { _id: string; content: string; isDone: boolean };

const ListElement = ({
  item,
  listId,
  setInitialRender,
}: {
  item: ListElementType;
  listId: string;
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editItem, setEditItem] = useState<ListElementType>();

  const handleEditTrigger = (itemToEdit: ListElementType) => {
    setIsEditable(true);
    setEditItem(itemToEdit);
  };
  return (
    <li onDoubleClick={() => handleEditTrigger(item)}>
      {isEditable && editItem ? (
        <EditElement
          item={editItem}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          setInitialRender={setInitialRender}
        />
      ) : (
        <div className={element.item}>
          <ListContent item={item} setInitialRender={setInitialRender} />
          <EditDeleteButtons
            item={item}
            handleEditTrigger={handleEditTrigger}
            setInitialRender={setInitialRender}
            listId={listId}
          />
        </div>
      )}
    </li>
  );
};

export default ListElement;
