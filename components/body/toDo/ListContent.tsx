import React from "react";
import element from "@/styles/allNotes/toDo/element.module.scss";
import { editElement } from "@/utils/apiCalls/toDoCalls";

const ListContent = ({
  item,
  setInitialRender,
}: {
  item: { isDone: boolean; content: string; _id: string };
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCheckBox = async (item: {
    isDone: boolean;
    content: string;
    _id: string;
  }) => {
    if (item.isDone) {
      item.isDone = false;
      await editElement(item, item._id);
    } else {
      item.isDone = true;
      await editElement(item, item._id);
    }

    setInitialRender(false);
  };

  return (
    <div className={element.content}>
      {item.isDone ? (
        <input
          type="checkbox"
          checked
          id={item._id}
          onChange={() => {
            handleCheckBox(item);
          }}
        />
      ) : (
        <input
          type="checkbox"
          id={item._id}
          onChange={() => {
            handleCheckBox(item);
          }}
        />
      )}

      <label htmlFor={item._id} className={element.label}>
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
