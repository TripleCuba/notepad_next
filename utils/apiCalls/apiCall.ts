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

export const postNote = async (data: { title: string; content: string }) => {
  try {
    const resp = await axiosNote.post("/createNote", data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const editNote = async (data: {
  title: string;
  content: string;
  category: string;
  isFavorite: boolean;
}) => {
  try {
    const resp = await axiosNote.patch("/editNote", data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = async (id: string) => {
  try {
    const resp = await axiosNote.delete(`/deleteNote/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
