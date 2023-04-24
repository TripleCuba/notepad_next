import React, { useState } from "react";
import { ListArray } from "@/pages/allNotes/toDo/[id]";
import element from "@/styles/allNotes/toDo/element.module.scss";
import ListContent from "./ListContent";
import EditElement from "./EditElement";
import EditDeleteButtons from "./EditDeleteButtons";
export type ListElementType = { _id: string; content: string; isDone: boolean };

const ListElement = ({
  item,
  index,
  listArray,
  listId,
  setListArray,
  setInitialRender,
}: {
  item: ListElementType;
  index: number;
  listArray: ListArray;
  listId: string;
  setListArray: React.Dispatch<React.SetStateAction<ListArray | []>>;
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
          <ListContent
            item={item}
            index={index}
            listArray={listArray}
            setListArray={setListArray}
            setInitialRender={setInitialRender}
          />
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
