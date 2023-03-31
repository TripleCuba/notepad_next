import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <nav>
      <div>
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
      <Link href="/auth/sign_up">
        <button>Sign Up</button>
      </Link>
      <Link href="/auth/log_in">
        <button>LogIn</button>
      </Link>
    </nav>
  );
};

export default NavBar;
