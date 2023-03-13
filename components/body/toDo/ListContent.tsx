import React from "react";
import toDoListElement from "@/styles/allNotes/toDo/toDoListElement.module.scss";

const ListContent = ({
  item,
}: {
  item: { isDone: boolean; content: string };
}) => {
  return (
    <div className={toDoListElement.content}>
      {item.isDone ? (
        <h3 className={toDoListElement.pressed}>{item.content}</h3>
      ) : (
        <h3> {item.content} </h3>
      )}
    </div>
  );
};

export default ListContent;
