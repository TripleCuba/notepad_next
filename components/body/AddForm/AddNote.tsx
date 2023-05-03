import addNote from "@/styles/addNote/addNote.module.scss";
import { postNote } from "@/utils/apiCalls/apiCall";
import React, { useState } from "react";
import NoteCategory from "./NoteCategory";

const AddNote = () => {
  const initialData = { title: "", content: "", category: "" };
  const [formData, setFormData] = useState(initialData);
  const [message, setMessage] = useState("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    let newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let resp = await postNote(formData);

    if (resp) {
      setFormData(initialData);
      setMessage("You have created a note successfully");
    }
  };
  setTimeout(() => {
    setMessage("");
  }, 5000);
  return (
    <div className={addNote.container}>
      <div className={addNote.head}>
        <h1 className={addNote.title}>Add note!</h1>
        <h3>{message && message}</h3>
      </div>
      <form className={addNote.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          required
          value={formData.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <NoteCategory
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
          setMessage={setMessage}
        />
        <label htmlFor="content">Content</label>
        <textarea
          placeholder="Enter your content here"
          required
          value={formData.content}
          name="content"
          onChange={(e) => handleChange(e)}
        />
        <input value="Add" className={addNote.submit} type="submit" />
      </form>
    </div>
  );
};

export default AddNote;
