import React, { useState } from "react";
import { ListArray } from "@/pages/allNotes/toDo/[id]";
import toDoListElement from "@/styles/allNotes/toDo/toDoListElement.module.scss";
import ListContent from "./ListContent";
import EditElement from "./EditElement";
import CheckBox from "./CheckBox";
import EditDeleteButtons from "./EditDeleteButtons";
export type ListElementType = { _id: string; content: string; isDone: boolean };

const ListElement = ({
  item,
  index,
  listArray,
  setListArray,
  setInitialRender,
}: {
  item: ListElementType;
  index: number;
  listArray: ListArray;
  setListArray: (value: React.SetStateAction<ListArray>) => void;
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
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
          setInitialRender={setInitialRender}
        />
      ) : (
        <div className={toDoListElement.element}>
          <div className={toDoListElement.innerElement}>
            <CheckBox
              key={index}
              item={item}
              listArray={listArray}
              setListArray={setListArray}
              index={index}
            />
            <ListContent item={item} />
          </div>
          <EditDeleteButtons
            item={item}
            handleEditTrigger={handleEditTrigger}
            setInitialRender={setInitialRender}
          />
        </div>
      )}
    </li>
  );
};

export default ListElement;
