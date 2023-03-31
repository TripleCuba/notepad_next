import axios from "axios";

const axiosToDo = axios.create({
  baseURL: "http://localhost:7000/toDo/",
  withCredentials: true,
});

export const createList = async (data: { title: string }) => {
  const resp = await axiosToDo.post("createList/", data);
  return resp.data;
};

export const getList = async (id: string) => {
  const resp = await axiosToDo.get(`getList/${id}`);
  return resp.data;
};

export const getAllLists = async () => {
  const resp = await axiosToDo.get("getLists/");
  return resp.data;
};

export const createElement = async (
  data: { _id: string; content: string },
  id: string
) => {
  const resp = axiosToDo.post(`createElement/${id}`, data);
  return resp;
};
export const editElement = async (
  data: { _id: string; content: string; isDone: boolean },
  id: string
) => {
  const resp = axiosToDo.patch(`editElement/${id}`, data);
  return resp;
};
export const deleteElement = async (id: string) => {
  const resp = axiosToDo.delete(`deleteElement/${id}`);
  return resp;
};
