import axios from "axios";
const baseUrl: String = "http://localhost:7000/user";

export const createUser = async (data) => {
  let resp = await axios.post(`${baseUrl}/createUser/`, data);
  return resp.data;
};

export const loginUser = async (data) => {
  let resp = await axios.post(`${baseUrl}/login/`, data, {
    withCredentials: true,
  });
  return resp.data;
};
