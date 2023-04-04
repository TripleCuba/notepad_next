import LogInForm from "@/components/auth/LogInForm";
import { useUser } from "@/components/GlobalContext";
import { loginUser } from "@/utils/apiCalls/authApiCalls";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LogIn = () => {
  const initialData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const router = useRouter();
  const [error, setError] = useState("");
  const { getUserData, user } = useUser();
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
  return (
    <div>
      <h1>Log In</h1>
      {error && <h2>{error}</h2>}
      <LogInForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default LogIn;
