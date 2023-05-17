import { NoteType } from "@/components/body/notesList/Notes";
import { getAllNotes } from "@/utils/apiCalls/apiCall";
import { useRouter } from "next/router";
import React, { useState, useEffect, useMemo } from "react";
import singleNote from "@/styles/allNotes/singleNote.module.scss";
import NoteHeader from "@/components/body/AllElements/note/NoteHeader";
import NoteFooter from "@/components/body/notesList/NoteFooter";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const SingleNote = () => {
  const router = useRouter();
  const [noteList, setNoteList] = useState<NoteType[]>([]);
  const [noteIndex, setNoteIndex] = useState<number>();
  const [initialState, setInitialState] = useState(true);
  const getData = async () => {
    const resp: NoteType[] = await getAllNotes();
    setNoteList(resp);
    return resp;
  };

  const currentNote = useMemo(() => {
    if (router.isReady) {
      let index = noteList.findIndex(
        (item: NoteType) => item._id === router.query.id
      );

      setNoteIndex(index);
      let note = noteList[index];
      return note;
    }
  }, [noteList, router.isReady, router.query.id]);

  const handlePageChange = (change: string) => {
    let changeDirection = change === "previous" ? 1 : -1;
    console.log(noteIndex);
    noteIndex !== undefined
      ? router.replace(
          `/allNotes/note/${noteList[noteIndex + changeDirection]._id}`
        )
      : router.push("/allNotes");
  };

  useEffect(() => {
    if (initialState) {
      getData();
      setInitialState(false);
    }
  }, [initialState, setInitialState]);
  return (
    <div className={singleNote.main}>
      {noteIndex !== noteList.length - 1 && (
        <div
          className={singleNote.arrowContainer}
          onClick={() => handlePageChange("previous")}
        >
          <MdArrowBackIos className={singleNote.arrow} />
        </div>
      )}

      {!initialState && currentNote ? (
        <div className={singleNote.container}>
          <div className={singleNote.body}>
            <NoteHeader note={currentNote} setInitialState={setInitialState} />
            <p>{currentNote.content}</p>
            <NoteFooter note={currentNote} />
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
      {noteIndex !== 0 && (
        <div
          className={singleNote.arrowContainer}
          onClick={() => handlePageChange("next")}
        >
          <MdArrowForwardIos className={singleNote.arrow} />
        </div>
      )}
    </div>
  );
};

export default SingleNote;
