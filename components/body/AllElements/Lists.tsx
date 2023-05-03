import { getAllLists } from "@/utils/apiCalls/toDoCalls";
import { useEffect, useState } from "react";

const Lists = () => {
  const [lists, setLists] = useState([]);
  const getData = async () => {
    const resp = await getAllLists();

    setLists(resp);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>All To-Do lists</h1>
      <ul>
        {lists.length ? (
          lists.map((item: { _id: string; title: string }) => (
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

export default Lists;
