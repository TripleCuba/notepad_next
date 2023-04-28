import axios from "axios";
const axiosUser = axios.create({
  baseURL: "http://localhost:7000/user/",
  withCredentials: true,
});

export const createUser = async (data: {
  username: string;
  password1: string;
  password2: string;
  email: string;
}) => {
  let resp = await axiosUser.post(`createUser/`, data);
  return resp.data;
};

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  let resp = await axiosUser.post(`login/`, data);
  return resp.data;
};

export const logOut = async () => {
  let resp = await axiosUser.get(`logOut/`);
  return resp.data;
};

export const getUser = async () => {
  const resp = await axiosUser.get(`getUser/`);
  return resp.data;
};
