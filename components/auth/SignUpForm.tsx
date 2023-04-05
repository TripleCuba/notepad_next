import React from "react";
import auth from "@/styles/auth/auth.module.scss";

const SignUpForm = ({
  handleSubmit,
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: {
    username: string;
    password1: string;
    password2: string;
    email: string;
  };
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={auth.form}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Password"
        name="password1"
        value={formData.password1}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Confirm Password"
        name="password2"
        value={formData.password2}
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Create" className={auth.submit} />
    </form>
  );
};

export default SignUpForm;
