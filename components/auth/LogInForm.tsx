import React from "react";
import auth from "@/styles/auth/auth.module.scss";

const LogInForm = ({
  handleChange,
  handleSubmit,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  formData: { username: string; password: string };
}) => {
  return (
    <form className={auth.form}>
      {/* <form className={auth.form} onSubmit={(e) => handleSubmit(e)}> */}
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e)}
      />
      {/* <input type="submit" value="Login" className={auth.submit} /> */}
      <button onClick={(e) => handleSubmit(e)}>Login test</button>
    </form>
  );
};

export default LogInForm;
