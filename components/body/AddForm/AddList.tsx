import addNote from "@/styles/addNote/addNote.module.scss";
import { createList } from "@/utils/apiCalls/toDoCalls";

import { useRouter } from "next/router";
import React, { useState } from "react";
const AddList = () => {
  const router = useRouter();
  const initialData = { title: "" };
  const [formData, setFormData] = useState(initialData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await createList(formData);

    resp && router.push(`/allNotes/toDo/${resp._id}`);
  };
  return (
    <div className={addNote.container}>
      <div className={addNote.head}>
        <h1 className={addNote.title}>Add To Do List!</h1>
      </div>
      <form className={addNote.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Add title for To-Do list</label>
        <input
          type="text"
          placeholder="Title"
          required
          value={formData.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <input value="Add" className={addNote.submit} type="submit" />
      </form>
    </div>
  );
};

export default AddList;
