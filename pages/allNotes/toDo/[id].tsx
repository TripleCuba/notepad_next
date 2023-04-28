import ListElement from "@/components/body/toDo/ListElement";
import NewElement from "@/components/body/toDo/NewElement";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getList } from "@/utils/apiCalls/toDoCalls";
import element from "@/styles/allNotes/toDo/element.module.scss";
type ToDo = { _id: string; content: string; isDone: boolean };
type List = {
  _id: string;
  title: string;
  toDo: ToDo[];
};

export type ListArray = [{ _id: string; content: string; isDone: boolean }];
const ToDo = () => {
  const router = useRouter();
  const [listTitle, setListTitle] = useState<string>("");
  const [listId, setListId] = useState<string>("");
  const [listArray, setListArray] = useState<ListArray | []>([]);
  const [initialRender, setInitialRender] = useState(false);

  const getData = async (id: string) => {
    const resp = await getList(id);
    try {
      setListTitle(resp.title);
      setListArray(resp.toDo);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (router.isReady && initialRender === false) {
      let newQuery = { ...router.query };
      let { id } = newQuery;
      const newId = Array.isArray(id) ? id[0] : id;
      if (newId) {
        getData(newId);
        setListId(newId);

        setInitialRender(true);
      }
    }
  }, [router.isReady, router.query.id, initialRender, listArray]);
  return (
    <div className={element.main}>
      {initialRender === false ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className={element.title}>{listTitle}</h1>
          <ul className={element.list}>
            {listArray.length ? (
              listArray.map((item, index) => (
                <ListElement
                  key={index}
                  item={item}
                  setInitialRender={setInitialRender}
                  listId={listId}
                />
              ))
            ) : (
              <h1>List is empty</h1>
            )}
          </ul>
          <NewElement id={listId} setInitialRender={setInitialRender} />
        </div>
      )}
      <button onClick={() => router.push("/allNotes")}>go back</button>
    </div>
  );
};

export default ToDo;
