import React, { useState, useEffect } from "react";
import { NoteType } from "../AllElements/Notes";
import { getAllNotes } from "@/utils/apiCalls/apiCall";

const FilterList = ({
  notes,
  setNotes,
  getData,
  setFilteredNotes,
}: {
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>;
  getData: () => Promise<void>;
  setFilteredNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>;
}) => {
  const [categories, setCategories] = useState<string[] | []>([]);
  const getCategories = async () => {
    let resp = await getAllNotes();
    let newArray: string[] = [];
    resp.forEach((note: NoteType) => {
      const thisCategory = note.category;
      const duplicate = newArray.find((item: string) => item === thisCategory);
      console.log(duplicate);
      if (!duplicate && thisCategory) {
        newArray.push(thisCategory);
      }
    });
    setCategories(newArray);
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newCategory = e.target.value;

    const newNotesArray = [...notes];
    const filteredArray = newNotesArray.filter(
      (note: NoteType) => note.category === newCategory
    );
    console.log(filteredArray);
    setNotes(filteredArray);
  };

  useEffect(() => {
    getCategories();
    console.log(notes);
  }, [notes]);
  return (
    <div>
      <label htmlFor="filter">Filter by category</label>
      <select onChange={(e) => handleFilterChange(e)}>
        <option>all</option>
        <option value="">Uncategorized</option>
        {categories &&
          categories.map((category: string, index: number) => (
            <option key={index}>{category}</option>
          ))}
      </select>
    </div>
  );
};

export default FilterList;
