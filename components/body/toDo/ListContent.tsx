import React from "react";
import element from "@/styles/allNotes/toDo/element.module.scss";
import type { ListArray } from "@/pages/allNotes/toDo/[id]";
import { editElement } from "@/utils/apiCalls/toDoCalls";

const ListContent = ({
  item,
  index,
  listArray,
  setInitialRender,
}: {
  item: { isDone: boolean; content: string };
  index: number;
  listArray: ListArray;
  setListArray: (value: React.SetStateAction<ListArray>) => void;
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCheckBox = async () => {
    let newArray = [...listArray];
    let newItem = newArray[index];
    if (newItem.isDone) {
      newItem.isDone = false;
      await editElement(newItem, newItem._id);
    } else {
      newItem.isDone = true;
      await editElement(newItem, newItem._id);
    }

    setInitialRender(false);
  };

  return (
    <div className={element.content}>
      {item.isDone ? (
        <input
          type="checkbox"
          checked
          id={`isDone${index}`}
          onChange={() => {
            handleCheckBox();
          }}
        />
      ) : (
        <input
          type="checkbox"
          id={`isDone${index}`}
          onChange={() => {
            handleCheckBox();
          }}
        />
      )}

      <label htmlFor={`isDone${index}`} className={element.label}>
        {item.isDone ? (
          <h3 className={element.pressed}>{item.content}</h3>
        ) : (
          <h3> {item.content} </h3>
        )}
      </label>
    </div>
  );
};

export default ListContent;
