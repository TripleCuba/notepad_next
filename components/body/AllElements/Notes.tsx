import { getAllNotes } from "@/utils/apiCalls/apiCall";
import main from "@/styles/allNotes/main.module.scss";

import React, { useState, useEffect } from "react";
import Note from "../note/Note";
import { useRouter } from "next/router";
import ListHead from "../note/ListHead";

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
  const [filteredNotes, setFilteredNotes] = useState<NoteType[] | []>([]);
  const [sortBy, setSortBy] = useState("newest");
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
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={main.container}>
      <div className={main.head}>
        <h1>Notes</h1>
      </div>
      <ListHead
        notes={notes}
        setNotes={setNotes}
        setSortBy={setSortBy}
        sortNotes={sortNotes}
        getData={getData}
        setFilteredNotes={setFilteredNotes}
      />

      <ul className={main.list}>
        {!filteredNotes.length ? (
          notes.length ? (
            notes.map((note: NoteType, index) => (
              <Note note={note} key={index} getData={getData} />
            ))
          ) : (
            <h3>There is no notes</h3>
          )
        ) : (
          filteredNotes.map((note: NoteType, index) => (
            <Note note={note} key={index} getData={getData} />
          ))
        )}
      </ul>

      <button
        className={main.listFooter}
        onClick={() => router.push("addNote")}
      >
        Create new note
      </button>
    </div>
  );
};

export default Notes;
