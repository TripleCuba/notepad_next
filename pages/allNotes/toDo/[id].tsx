import ListElement from "@/components/body/toDo/ListElement";
import NewElement from "@/components/body/toDo/NewElement";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getList } from "@/utils/apiCalls/toDoCalls";
import element from "@/styles/allNotes/toDo/element.module.scss";

type List = {
  _id: string;
  title: string;
  toDo: [{ _id: string; content: string; isDone: boolean }];
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
    console.log(resp);
    setListTitle(resp.title);
    setListArray(resp.toDo);
  };
  useEffect(() => {
    if (router.isReady && initialRender === false) {
      let newQuery = { ...router.query };
      let { id } = newQuery;
      const newId = Array.isArray(id) ? id[0] : id;
      if (newId) {
        setListId(newId);
        getData(newId);
        setInitialRender(true);
      }
    }
  }, [router.isReady, router.query.id, initialRender, listArray]);
  return (
    <div className={element.main}>
      {initialRender === false ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1 className={element.title}>{listTitle}</h1>
          <ul className={element.list}>
            {listArray.length ? (
              listArray.map((item, index) => (
                <ListElement
                  key={index}
                  item={item}
                  listArray={listArray}
                  setListArray={setListArray}
                  index={index}
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
    </div>
  );
};

export default ToDo;
