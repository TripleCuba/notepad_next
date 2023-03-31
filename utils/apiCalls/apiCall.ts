import axios from "axios";

const baseUrl: String = "http://localhost:7000";

export const getAllNotes = async () => {
  try {
    const resp = await axios.get(`${baseUrl}/getAllNotes`);
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

export const createList = async (data: { title: String }) => {
  try {
    const resp = await axios.post(`${baseUrl}/toDo/createList`, data);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
