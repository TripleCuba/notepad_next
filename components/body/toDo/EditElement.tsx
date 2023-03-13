import React, { useEffect, useState } from "react";
import toDoListElement from "@/styles/allNotes/toDo/toDoListElement.module.scss";
import { ListElementType } from "./ListElement";
import { editListElement } from "@/apiCalls/apiCall";

const EditElement = ({
  item,
  isEditable,
  setIsEditable,
}: {
  item: ListElementType;
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState<ListElementType>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFormData = { ...formData };
    newFormData.content = e.target.value;
    setFormData(newFormData);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let resp = await editListElement(formData);
    console.log(resp);
    setIsEditable(false);
  };
  useEffect(() => {
    item && setFormData(item);
  }, [isEditable, setFormData, item]);
  return (
    <form className={toDoListElement.edit} onSubmit={(e) => handleSubmit(e)}>
      {formData ? (
        <input
          type="text"
          value={formData.content}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <h2>error</h2>
      )}

      <div className={toDoListElement.buttons}>
        <input type="submit" value="save" className={toDoListElement.save} />
        <button
          className={toDoListElement.cancel}
          onClick={() => setIsEditable(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditElement;
