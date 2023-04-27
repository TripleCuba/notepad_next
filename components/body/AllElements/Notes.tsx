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

  const getData = async (filterBy: string = filterByState) => {
    const resp = await getAllNotes();
    const sortedNotes = sortNotes(resp, sortBy);
    if (filterBy !== "all") {
      setFilterByState(filterBy);

      console.log(filterBy);
      let filtered =
        filterBy === "favorite"
          ? sortedNotes.filter((note: NoteType) => note.isFavorite === true)
          : sortedNotes.filter((note: NoteType) => note.category === filterBy);
      setNotes(filtered);
    } else {
      setNotes(sortedNotes);
    }
  };

  useEffect(() => {
    if (initialRender) {
      getData();
      console.log("labas");
      setInitialRender(false);
    }
  }, [notes, initialRender]);

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
      />

      <ul className={main.list}>
        {notes.length ? (
          notes.map((note: NoteType, index) => (
            <Note note={note} key={index} setInitialRender={setInitialRender} />
          ))
        ) : (
          <h3>There is no notes</h3>
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
