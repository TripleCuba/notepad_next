import axios from "axios";

const baseUrl: String = "http://localhost:7000/notes";

export const getAllNotes = async () => {
  try {
    const resp = await axios.get(`${baseUrl}/getAllNotes`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const getListData = async (id: String) => {
  try {
    const resp = await axios.get(`${baseUrl}/getToDoList/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
export const getAllListData = async () => {
  try {
    const resp = await axios.get(`${baseUrl}/getToDoLists/`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const postNote = async (data: { title: String; text: String }) => {
  try {
    const resp = await axios.post(`${baseUrl}/post`, data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const createListElement = async (data: {
  _id: String;
  content: String;
}) => {
  try {
    const resp = await axios.post(`${baseUrl}/createToDo`, data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const createList = async (data: { title: String }) => {
  try {
    const resp = await axios.post(`${baseUrl}/createToDoList`, data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const editListElement = async (data: {
  _id: string;
  content: string;
  isDone: boolean;
}) => {
  try {
    const resp = await axios.patch(`${baseUrl}/editToDo`, data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
