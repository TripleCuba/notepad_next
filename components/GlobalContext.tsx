import { getUser } from "@/utils/apiCalls/authApiCalls";
import React, { useContext, useState, useEffect } from "react";
type UserType = {
  isAuthenticated: boolean;
  username: string;
};
const initialValue = {
  isAuthenticated: false,
  username: "",
};
export type ContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  getUserData: () => Promise<void>;
};
const GlobalContext = React.createContext<ContextType | null>(null);

export function useUser() {
  return useContext(GlobalContext);
}

export const UserProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<UserType>(initialValue);
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
