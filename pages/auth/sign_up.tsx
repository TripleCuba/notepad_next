import SignUpForm from "@/components/auth/SignUpForm";
import auth from "@/styles/auth/auth.module.scss";
import { createUser } from "@/utils/apiCalls/authApiCalls";
import {
  emailValidation,
  passwordMatchValidation,
} from "@/utils/validation/authValidation";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import React, { useState } from "react";
type SignUpFormData = {
  username: string;
  email: string;
  password1: string;
  password2: string;
};
const SignUp = () => {
  const initialData = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");

  const validateData = (data: SignUpFormData) => {
    const isNotEmpty = emptyDataValidation(data);
    const isEmailValid = emailValidation(data.email);
    const passwordMatch = passwordMatchValidation(
      data.password1,
      data.password2
    );
    let isValid: boolean;
    if (!isNotEmpty) {
      setError("All fields must be filled");
      isValid = false;
    } else if (!passwordMatch) {
      setError("Passwords does not match");
      isValid = false;
    } else if (!isEmailValid) {
      setError("Email is not valid");
      isValid = false;
    } else {
      isValid = true;
    }
    return isValid;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newData = { ...formData };
    newData = { ...newData, [e.target.name]: e.target.value };
    setFormData(newData);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateData(formData);
    if (isValid) {
      let resp = createUser(formData);
    }
  };
  setTimeout(() => {
    setError("");
  }, 10000);
  return (
    <div className={auth.main}>
      <h1>Sign Up!</h1>
      {error && <h3 className={auth.error}>{error}</h3>}
      <SignUpForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default SignUp;
