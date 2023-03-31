import { getAllNotes, postNote } from "@/utils/apiCalls/apiCall";
import React, { useEffect, useState } from "react";

// export default function index()
const Index = () => {
  type FormData = { title: string; text: string };
  const initialState: FormData = { title: "", text: "" };
  const [formData, setFormData] = useState<FormData>(initialState);
  const [postList, setPostList] = useState([]);

  const handleChange = (e: any) => {
    const newObj: FormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newObj);
    console.log(newObj);
  };
  const handleSubmit = async () => {
    const resp = await postNote(formData);
    console.log(resp);
    getData();
  };
  const getData = async () => {
    const resp = await getAllNotes();
    resp ? setPostList(resp) : setPostList([]);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="addNoteForm">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          placeholder="Enter your text here"
          name="text"
          value={formData.text}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
      <div>
        <h1>Recent posts:</h1>
        {postList.length ? (
          postList.map(
            (
              item: { _id: String; title: String; text: String },
              index: Number
            ) => (
              <div key={index}>
                <h1>{item.title}</h1>
                <p>{item._id}</p>
                <p>{item.text}</p>
              </div>
            )
          )
        ) : (
          <h1>sorry</h1>
        )}
      </div>
    </div>
  );
};
export default Index;
