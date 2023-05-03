import React from "react";
import { NoteType } from "./Notes";
import FilterList from "./FilterList";
import notesList from "@/styles/allNotes/notesList.module.scss";

const ListHead = ({
  notes,
  setNotes,
  setSortBy,
  sortNotes,
  setFilterByState,
}: {
  notes: NoteType[] | [];
  setNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortNotes: (arr: NoteType[], sortByNewest: string) => NoteType[];
  setFilterByState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    const sortedArray: NoteType[] = sortNotes(notes, e.target.value);
    setNotes(sortedArray);
  };

  return (
    <div className={notesList.listHeader}>
      <div className={notesList.headSelect}>
        <label htmlFor="sort">Sort by</label>
        <select name="sort" onChange={(e) => handleSortChange(e)}>
          <option value={"newest"}>Newest</option>
          <option value={"oldest"}>Oldest</option>
        </select>
      </div>
      <FilterList notes={notes} setFilterByState={setFilterByState} />
    </div>
  );
};

export default ListHead;
