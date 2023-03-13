import React, { useState } from "react";
import { ListArray } from "@/pages/allNotes/toDo/[id]";
import toDoListElement from "@/styles/allNotes/toDo/toDoListElement.module.scss";
import ListContent from "./ListContent";
import EditElement from "./EditElement";
import CheckBox from "./CheckBox";
export type ListElementType = { _id: string; content: string; isDone: boolean };

const ListElement = ({
  item,
  index,
  listArray,
  setListArray,
}: {
  item: ListElementType;
  index: number;
  listArray: ListArray;
  setListArray: (value: React.SetStateAction<ListArray>) => void;
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editItem, setEditItem] = useState<ListElementType>();
  const handleEditTrigger = (itemToEdit: ListElementType) => {
    setIsEditable(true);
    setEditItem(itemToEdit);
  };
  return (
    <li
      className={toDoListElement.main}
      onDoubleClick={() => handleEditTrigger(item)}
    >
      {isEditable ? (
        <EditElement
          item={editItem}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
        />
      ) : (
        <div className={toDoListElement.element}>
          <CheckBox
            key={index}
            item={item}
            listArray={listArray}
            setListArray={setListArray}
            index={index}
          />
          <ListContent item={item} />{" "}
        </div>
      )}
    </li>
  );
};

export default ListElement;
