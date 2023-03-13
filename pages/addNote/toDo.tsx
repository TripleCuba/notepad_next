import { createList } from "@/apiCalls/apiCall";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ToDo = () => {
  const [listTitle, setListTitle] = useState("");
  const router = useRouter();
  const handleSubmitList = async () => {
    const resp: { title: String; toDo: []; _id: String } = await createList({
      title: listTitle,
    });
    resp && router.push(`/allNotes/toDo/${resp._id}`);
  };
  return (
    <div>
      <div>
        <h1>create list</h1>
        <h3>List name:</h3>
        <input
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          type="text"
        />
        <button onClick={handleSubmitList}>Create List</button>
      </div>
    </div>
  );
};

export default ToDo;
