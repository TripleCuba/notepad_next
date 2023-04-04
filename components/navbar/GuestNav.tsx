import React from "react";
import Link from "next/link";
import nav from "@/styles/navbar/nav.module.scss";
const GuestNav = () => {
  return (
    <div className={nav.main}>
      <div className={nav.routes}>
        <Link href="/home">
          <button>Home</button>
        </Link>
      </div>
      <div className={nav.profile}>
        <Link href="/auth/sign_up">
          <button>Sign Up</button>
        </Link>
        <Link href="/auth/log_in">
          <button>LogIn</button>
        </Link>
      </div>
    </div>
  );
};

export default GuestNav;
