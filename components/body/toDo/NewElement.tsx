import React, { useState } from "react";
import element from "@/styles/allNotes/toDo/element.module.scss";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import { createElement } from "@/utils/apiCalls/toDoCalls";
import { MdAddBox, MdCancel } from "react-icons/md";

const NewElement = ({
  id,
  setInitialRender,
}: {
  id: string;
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState({ _id: id, content: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFormData = { ...formData };
    newFormData.content = e.target.value;
    setFormData(newFormData);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    let isValid = emptyDataValidation(formData);
    if (isValid) {
      const resp = await createElement(formData, formData._id);
      resp ? setInitialRender(false) : console.log(resp);
    } else {
      alert("data is not valid");
    }
  };
  return (
    <div className={element.addNewElement}>
      <form className={element.item} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={element.textInput}
          value={formData.content}
          onChange={(e) => handleChange(e)}
          placeholder="add new to-do"
        />
        <div className={element.buttonContainer}>
          <button
            onClick={(e) => handleSubmit(e)}
            className={element.iconButton}
          >
            <MdAddBox className={element.icon} />
          </button>
          <button className={element.iconButton}>
            <MdCancel className={element.icon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewElement;
