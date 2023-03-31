import React, { useState } from "react";
import addToDo from "@/styles/allNotes/toDo/addToDo.module.scss";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import { createElement } from "@/utils/apiCalls/toDoCalls";

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
    <div>
      <form className={addToDo.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          value={formData.content}
          onChange={(e) => handleChange(e)}
          placeholder="add new to-do"
        />
        <input type="submit" value="Add" className={addToDo.add} />
      </form>
    </div>
  );
};

export default NewElement;
