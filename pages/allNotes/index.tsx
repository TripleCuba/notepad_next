import Lists from "@/components/body/AllElements/Lists";
import Notes from "@/components/body/AllElements/Notes";
import React, { useState } from "react";
import main from "@/styles/allNotes/main.module.scss";

const Index = () => {
  const [trigger, setTrigger] = useState("notes");

  return (
    <div className={main.main}>
      <div className={main.nav}>
        <button onClick={() => setTrigger("notes")}>Notes</button>
        <button onClick={() => setTrigger("lists")}>Lists</button>
      </div>
      {trigger === "notes" ? <Notes /> : <Lists />}
    </div>
  );
};

export default Index;
