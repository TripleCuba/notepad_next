import Lists from "@/components/body/AllElements/Lists";
import Notes from "@/components/body/notesList/Notes";
import React, { useState } from "react";
import notesList from "@/styles/allNotes/notesList.module.scss";

const Index = () => {
  const [trigger, setTrigger] = useState("notes");

  return (
    <div className={notesList.main}>
      <div className={notesList.nav}>
        <button onClick={() => setTrigger("notes")}>Notes</button>
        <button onClick={() => setTrigger("lists")}>Lists</button>
      </div>
      {trigger === "notes" ? <Notes /> : <Lists />}
    </div>
  );
};

export default Index;
