import { getListData } from "@/apiCalls/apiCall";
import ListElement from "@/components/body/toDo/ListElement";
import NewElement from "@/components/body/toDo/NewElement";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toDoList from "styles/allNotes/toDo/toDoList.module.scss";

type List = {
  _id: string;
  title: string;
  toDo: [{ _id: string; content: string; isDone: boolean }];
};

export type ListArray = [{ _id: string; content: string; isDone: boolean }];
const ToDo = () => {
  const router = useRouter();
  const [listTitle, setListTitle] = useState<string>();
  const [listId, setListId] = useState<string>();
  const [listArray, setListArray] = useState<ListArray>([]);
  const [initialRender, setInitialRender] = useState(false);

  const getData = async (id: string) => {
    const resp = await getListData(id);
    console.log(resp);
    setListTitle(resp.title);
    setListArray(resp.toDo);
  };
  useEffect(() => {
    if (router.isReady && initialRender === false) {
      let id: string = router.query.id;
      setListId(id);
      id && getData(id);
      setInitialRender(true);
    }
  }, [router.isReady, router.query.id, initialRender, listArray]);
  return (
    <div className={toDoList.main}>
      {initialRender === false ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>{listTitle}</h1>
          <ul>
            {listArray.length ? (
              listArray.map((item, index) => (
                <ListElement
                  key={index}
                  item={item}
                  listArray={listArray}
                  setListArray={setListArray}
                  index={index}
                />
              ))
            ) : (
              <h1>List is empty</h1>
            )}
          </ul>
          <NewElement id={listId} setInitialRender={setInitialRender} />
        </div>
      )}
    </div>
  );
};

export default ToDo;
