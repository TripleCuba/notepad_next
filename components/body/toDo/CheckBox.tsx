import React from "react";
import toDoListElement from "@/styles/allNotes/toDo/toDoListElement.module.scss";
import { ListArray } from "@/pages/allNotes/toDo/[id]";
import { ListElementType } from "./ListElement";
import { editElement } from "@/utils/apiCalls/toDoCalls";
const CheckBox = ({
  index,
  listArray,
  setListArray,
  item,
}: {
  item: ListElementType;
  index: number;
  listArray: ListArray;
  setListArray: (value: React.SetStateAction<ListArray>) => void;
}) => {
  const handleCheckBox = async (id: number) => {
    let newList: ListArray = [...listArray];
    let newListItem = newList[id];
    if (newListItem.isDone) {
      newListItem.isDone = false;
    } else {
      newListItem.isDone = true;
    }
    const resp = await editElement(newListItem, newListItem._id);
    setListArray(newList);
  };
  return (
    <div
      className={toDoListElement.checkBox}
      onClick={() => handleCheckBox(index)}
    >
      <div className={toDoListElement.innerBox}>
        {item.isDone ? <div className={toDoListElement.mark}></div> : ""}
      </div>
    </div>
  );
};

export default CheckBox;
