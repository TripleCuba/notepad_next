import { getAllNotes } from "@/utils/apiCalls/apiCall";
import React, { useEffect, useState } from "react";
import addNote from "@/styles/addNote/addNote.module.scss";

const NoteCategory = ({
  formData,
  handleChange,
  setFormData,
}: {
  formData: { title: string; content: string; category: string };
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
      category: string;
    }>
  >;
}) => {
  const [categories, setCategories] = useState<[string]>([]);
  const [newCategory, setNewCategory] = useState("");
  const addCategory = (e) => {
    e.preventDefault();
    let newFormData = { ...formData };
    let duplicate = categories.find((item) => item === newCategory);
    if (!duplicate) {
      let newArr = [...categories, newCategory];
      setCategories(newArr);
      newFormData.category = newCategory;
    } else {
      newFormData.category = newCategory;
    }
    setFormData(newFormData);
    setNewCategory("");
  };
  const getData = async () => {
    let resp = await getAllNotes();
    console.log(resp);
    let categories: [string] = [];
    resp.forEach((element: { category: string }) => {
      let duplicate = categories.find(
        (item: string) => item === element.category
      );
      if (!duplicate && element.category) {
        categories.push(element.category);
      }
    });
    setCategories(categories);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={addNote.category}>
      <label htmlFor="category">Category</label>
      <select
        name="category"
        value={formData.category}
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select category</option>
        {categories.length &&
          categories.map((item: string, index) => (
            <option key={index}>{item}</option>
          ))}
      </select>
      {!formData.category && (
        <div className={addNote.newCategory}>
          <input
            type="text"
            placeholder="Enter new category here"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            className={addNote.button}
            onClick={(e) => {
              addCategory(e);
            }}
          >
            add category
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteCategory;
