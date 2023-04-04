import React from "react";
import Link from "next/link";
import nav from "@/styles/navbar/nav.module.scss";
const AuthNav = ({
  username,
  deleteCookie,
}: {
  username: string;
  deleteCookie: () => Promise<void>;
}) => {
  return (
    <div className={nav.main}>
      <div className={nav.routes}>
        <Link href="/home">
          <button>Home</button>
        </Link>
        <Link href="/addNote">
          <button>Add note</button>
        </Link>
        <Link href="/allNotes">
          <button>All notes</button>
        </Link>
      </div>
      <div className={nav.profile}>
        {username && <button>hey {username}</button>}

        <button onClick={() => deleteCookie()}>Log out</button>
      </div>
    </div>
  );
};

export default AuthNav;
