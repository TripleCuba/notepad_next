import { getAllNotes } from "@/utils/apiCalls/apiCall";
import notesList from "@/styles/allNotes/notesList.module.scss";

import React, { useState, useEffect, useMemo } from "react";
import Note from "./Note";
import { useRouter } from "next/router";
import ListHead from "./ListHead";

export type NoteType = {
  title: string;
  content: string;
  category: string;
  _id: string;
  isFavorite: boolean;
  date: Date;
};
const Notes = () => {
  const [notes, setNotes] = useState<NoteType[] | []>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [filterByState, setFilterByState] = useState("all");
  const [initialRender, setInitialRender] = useState(true);
  const router = useRouter();
  const sortNotes = (arr: NoteType[], sortByNewest: string) => {
    let newArr = [...arr];
    let sortedByDate;

    sortedByDate = newArr.sort((a, b) => {
      let dateA = new Date(a.date).getTime();
      let dateB = new Date(b.date).getTime();
      return sortByNewest === "newest" ? dateB - dateA : dateA - dateB;
    });

    let sortedArray: NoteType[] = sortedByDate.sort((a, b) => {
      if (a.isFavorite && !b.isFavorite) {
        return -1;
      } else if (!a.isFavorite && b.isFavorite) {
        return 1;
      }
      return 0;
    });
    return sortedArray;
  };

  const getData = async () => {
    const resp = await getAllNotes();
    const sortedNotes = sortNotes(resp, sortBy);
    setNotes(sortedNotes);
    console.log(sortedNotes);
  };

  useEffect(() => {
    if (initialRender) {
      getData();
      setInitialRender(false);
    }
  }, [initialRender]);

  const filteredData = useMemo(() => {
    const newNotes = [...notes];
    let filteredNotes: NoteType[] | [];
    if (filterByState !== "all") {
      filteredNotes =
        filterByState === "favorite"
          ? newNotes.filter((item: NoteType) => item.isFavorite)
          : newNotes.filter(
              (item: NoteType) => item.category === filterByState
            );
    } else {
      filteredNotes = newNotes;
    }

    return filteredNotes;
  }, [notes, filterByState]);
  return (
    <div className={notesList.container}>
      <h1 className={notesList.listTitle}>Notes</h1>
      <ListHead
        notes={notes}
        setNotes={setNotes}
        setSortBy={setSortBy}
        sortNotes={sortNotes}
        setFilterByState={setFilterByState}
      />

      <ul className={notesList.list}>
        {filteredData.length ? (
          filteredData.map((note: NoteType, index) => (
            <Note note={note} key={index} setInitialRender={setInitialRender} />
          ))
        ) : (
          <h3>There is no notes</h3>
        )}
      </ul>

      <button
        className={notesList.listFooter}
        onClick={() => router.push("addNote")}
      >
        Create new note
      </button>
    </div>
  );
};

export default Notes;
