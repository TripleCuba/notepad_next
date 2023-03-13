import React from "react";
import { BiCheckboxSquare, BiCheckbox } from "react-icons/bi";
import toDoListElement from "@/styles/allNotes/toDo/toDoListElement.module.scss";
import { ListArray } from "@/pages/allNotes/toDo/[id]";
import { ListElementType } from "./ListElement";
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
  const handleCheckBox = (id: number) => {
    let newList: ListArray = [...listArray];

    if (newList[id].isDone) {
      newList[id].isDone = false;
    } else {
      newList[id].isDone = true;
    }
    console.log(newList);
    setListArray(newList);
  };
  return (
    <div
      className={toDoListElement.checkBox}
      onClick={() => handleCheckBox(index)}
    >
      {item.isDone ? (
        <BiCheckboxSquare className={toDoListElement.innerCheck} />
      ) : (
        <BiCheckbox className={toDoListElement.innerCheck} />
      )}
    </div>
  );
};

export default CheckBox;
