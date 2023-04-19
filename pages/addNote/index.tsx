import AddList from "@/components/body/AddForm/AddList";
import AddNote from "@/components/body/AddForm/AddNote";
import React, { useState } from "react";
import addNote from "@/styles/addNote/addNote.module.scss";

const Index = () => {
  const [trigger, setTrigger] = useState("note");

  return (
    <div className={addNote.main}>
      <div className={addNote.nav}>
        <button onClick={() => setTrigger("note")}>Add Simple Note</button>
        <button onClick={() => setTrigger("list")}>Add ToDo List</button>
      </div>
      {trigger === "note" ? <AddNote /> : <AddList />}
    </div>
  );
};
export default Index;
