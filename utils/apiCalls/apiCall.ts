import axios from "axios";

const baseUrl: String = "http://localhost:7000";

const axiosNote = axios.create({
  baseURL: "http://localhost:7000/notes",
  withCredentials: true,
});

export const getAllNotes = async () => {
  try {
    const resp = await axiosNote.get(`/getAllNotes`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const postNote = async (data: { title: String; content: String }) => {
  try {
    const resp = await axiosNote.post("/createNote", data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
