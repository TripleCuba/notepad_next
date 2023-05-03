import React from "react";
import { NoteType } from "./Notes";
import notesList from "@/styles/allNotes/notesList.module.scss";
const FilterList = ({
  notes,
  setFilterByState,
}: {
  notes: NoteType[];
  setFilterByState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const getCategories = () => {
    let newArray: string[] = [];
    notes.forEach((note: NoteType) => {
      const thisCategory = note.category;
      const duplicate = newArray.find((item: string) => item === thisCategory);
      if (!duplicate && thisCategory) {
        newArray.push(thisCategory);
      }
    });
    console.log(notes);
    return newArray;
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newCategory = e.target.value;
    setFilterByState(newCategory);
  };

  let categories = getCategories();
  return (
    <div className={notesList.headSelect}>
      <label htmlFor="filter">Filter by</label>
      <select onChange={(e) => handleFilterChange(e)}>
        <optgroup label="General">
          <option value="all">All</option>
          <option value="">Uncategorized</option>
          <option value="favorite">Favorites</option>
        </optgroup>
        <optgroup label="Custom">
          {categories?.map((category: string, index: number) => (
            <option key={index}>{category}</option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default FilterList;
