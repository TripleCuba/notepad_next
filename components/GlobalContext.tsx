import { getUser } from "@/utils/apiCalls/authApiCalls";
import React, { useContext, useState, useEffect } from "react";

const GlobalContext = React.createContext({});

export function useUser() {
  return useContext(GlobalContext);
}

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<{
    isAuthenticated: boolean;
    username: string;
  }>({ isAuthenticated: false, username: "" });
  const getUserData = async () => {
    const resp = await getUser();
    if (resp.success) {
      let newUser = { isAuthenticated: true, username: resp.user.username };
      setUser(newUser);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <GlobalContext.Provider value={{ user, setUser, getUserData }}>
      {children}
    </GlobalContext.Provider>
  );
};
