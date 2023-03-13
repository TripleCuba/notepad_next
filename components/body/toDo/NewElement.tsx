import { createListElement } from "@/apiCalls/apiCall";
import React, { useState } from "react";

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
    const resp = await createListElement(formData);
    resp ? setInitialRender(false) : console.log(resp);
  };
  return (
    <div>
      <form>
        <label>Add new element</label>
        <input value={formData.content} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default NewElement;
