import { NoteType } from "@/components/body/notesList/Notes";
import { getNote } from "@/utils/apiCalls/apiCall";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import singleNote from "@/styles/allNotes/singleNote.module.scss";
import NoteHeader from "@/components/body/AllElements/note/NoteHeader";

const SingleNote = () => {
  const router = useRouter();
  const [note, setNote] = useState<NoteType>();
  const [initialState, setInitialState] = useState(true);
  const getData = async (id: string) => {
    const resp = await getNote(id);
    if (!resp) {
      router.push("/allNotes");
    }
    setNote(resp);
  };
  useEffect(() => {
    if (router.isReady && initialState) {
      let newQuery = { ...router.query };
      let { id } = newQuery;
      const newId = Array.isArray(id) ? id[0] : id;
      if (newId) {
        getData(newId);

        setInitialState(false);
      }
    }
  }, [initialState, router, setInitialState]);
  return (
    <div className={singleNote.main}>
      {!initialState && note ? (
        <div className={singleNote.container}>
          <div className={singleNote.body}>
            <NoteHeader note={note} setInitialState={setInitialState} />
            <p>{note.content}</p>
            <p>{note.category}</p>
          </div>
          <div className={singleNote.footerButtons}>
            <button>Go back</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default SingleNote;
