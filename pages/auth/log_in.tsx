import { loginUser } from "@/utils/apiCalls/authApiCalls";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import React, { useState } from "react";

const LogIn = () => {
  const initialData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newData = { ...formData };
    newData = { ...newData, [e.target.name]: e.target.value };
    setFormData(newData);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = emptyDataValidation(formData);
    if (isValid) {
      let resp = await loginUser(formData);
      console.log(resp);
    }
  };
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LogIn;
