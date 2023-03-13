import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("allNotes/toDo");
        }}
      >
        To Do
      </button>
    </div>
  );
};

export default Index;
