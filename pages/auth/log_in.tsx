import LogInForm from "@/components/auth/LogInForm";
import { ContextType, useUser } from "@/components/GlobalContext";
import { loginUser } from "@/utils/apiCalls/authApiCalls";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import auth from "@/styles/auth/auth.module.scss";

const LogIn = () => {
  const initialData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const router = useRouter();
  const [error, setError] = useState("");
  const { getUserData, user } = useUser() as ContextType;
  user.isAuthenticated && router.push("/home");
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
      if (resp.success) {
        getUserData();
        router.push("/home");
      } else {
        setError(resp.message);
      }
    } else {
      setError("Empty fields found");
    }
  };

  setTimeout(() => {
    setError("");
  }, 10000);
  return (
    <div className={auth.main}>
      <h1>Log In</h1>
      {error && <h2 className={auth.error}>{error}</h2>}
      <LogInForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default LogIn;
