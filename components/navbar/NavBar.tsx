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
      <Link href="/SignUp">
        <button>Sign Up</button>
      </Link>
    </nav>
  );
};

export default NavBar;
