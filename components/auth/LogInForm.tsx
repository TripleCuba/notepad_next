import React from "react";

const LogInForm = ({
  handleChange,
  handleSubmit,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formData: { username: string; password: string };
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <input type="submit" value="Login" />
    </form>
  );
};

export default LogInForm;
