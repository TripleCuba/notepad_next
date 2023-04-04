import axios from "axios";
const baseUrl: String = "http://localhost:7000/user";

export const createUser = async (data: {
  username: string;
  password1: string;
  password2: string;
  email: string;
}) => {
  let resp = await axios.post(`${baseUrl}/createUser/`, data);
  return resp.data;
};

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  let resp = await axios.post(`${baseUrl}/login/`, data, {
    withCredentials: true,
  });
  return resp.data;
};

export const logOut = async () => {
  let resp = await axios.get(`${baseUrl}/logOut`, { withCredentials: true });
  return resp.data;
};

export const getUser = async () => {
  const resp = await axios.get(`${baseUrl}/getUser/`, {
    withCredentials: true,
  });
  return resp.data;
};
