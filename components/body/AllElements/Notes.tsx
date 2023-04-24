import { getAllNotes } from "@/utils/apiCalls/apiCall";
import main from "@/styles/allNotes/main.module.scss";

import React, { useState, useEffect } from "react";
import Note from "../note/Note";

export type NoteType = {
  title: string;
  content: string;
  category: string;
  _id: string;
  isFavorite: boolean;
  date: Date;
};
const Notes = () => {
  const [notes, setNotes] = useState<[NoteType] | []>([]);
  const [sortBy, setSortBy] = useState("newest");
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    const sortedArray: [NoteType] = sortNotes(notes, e.target.value);
    setNotes(sortedArray);
  };
  const sortNotes = (arr: [NoteType], sortByNewest: string) => {
    let newArr = [...arr];
    let sortedByDate;

    sortedByDate = newArr.sort((a, b) => {
      let dateA = new Date(a.date).getTime();
      let dateB = new Date(b.date).getTime();
      return sortByNewest === "newest" ? dateB - dateA : dateA - dateB;
    });

    let sortedArray = sortedByDate.sort((a, b) => {
      if (a.isFavorite && !b.isFavorite) {
        return -1;
      } else if (!a.isFavorite && b.isFavorite) {
        return 1;
      } else {
        return;
      }
    });
    return sortedArray;
  };
  const getData = async () => {
    const resp = await getAllNotes();
    const sortedNotes = sortNotes(resp, sortBy);
    setNotes(sortedNotes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={main.container}>
      <div className={main.head}>
        <h1>Notes</h1>
      </div>
      <select onChange={(e) => handleSortChange(e)}>
        <option value={"newest"}>Newest to Oldest</option>
        <option value={"oldest"}>Oldest to Newest</option>
      </select>
      <ul className={main.list}>
        {notes.length ? (
          notes.map((note: NoteType, index) => (
            <Note note={note} key={index} getData={getData} />
          ))
        ) : (
          <h3>There is no notes</h3>
        )}
      </ul>
    </div>
  );
};

export default Notes;
