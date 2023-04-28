import React from "react";
import { NoteType } from "../AllElements/Notes";
import FilterList from "./FilterList";

const ListHead = ({
  notes,
  setNotes,
  setSortBy,
  sortNotes,
  getData,
}: {
  notes: NoteType[] | [];
  setNotes: React.Dispatch<React.SetStateAction<[] | NoteType[]>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortNotes: (arr: NoteType[], sortByNewest: string) => NoteType[];
  getData: (filterBy: string) => Promise<void>;
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    const sortedArray: NoteType[] = sortNotes(notes, e.target.value);
    setNotes(sortedArray);
  };

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort by</label>
        <select name="sort" onChange={(e) => handleSortChange(e)}>
          <option value={"newest"}>Newest</option>
          <option value={"oldest"}>Oldest</option>
        </select>
      </div>
      <FilterList notes={notes} getData={getData} />
    </div>
  );
};

export default ListHead;
