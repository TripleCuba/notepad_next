import { getAllListData } from "@/apiCalls/apiCall";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [allLists, setAllLists] = useState([]);
  const getData = async () => {
    const resp = await getAllListData();
    console.log(resp);
    setAllLists(resp);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>All To-Do lists</h1>
      <ul>
        {allLists.length ? (
          allLists.map((item) => (
            <li key={item._id}>
              <h3>{item.title}</h3>
              <a href={`/allNotes/toDo/${item._id}`}>Check out</a>
            </li>
          ))
        ) : (
          <h1>List is empty</h1>
        )}
      </ul>
    </div>
  );
};

export default Index;
