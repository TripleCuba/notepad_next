import { logOut } from "@/utils/apiCalls/authApiCalls";
import { useRouter } from "next/router";
import AuthNav from "./AuthNav";
import GuestNav from "./GuestNav";
import { useUser } from "../GlobalContext";

const NavBar = () => {
  const guestUser = { isAuthenticated: false, username: {} };
  const { user, setUser } = useUser();
  const router = useRouter();
  const deleteCookie = async () => {
    let resp = await logOut();
    if (resp.success) {
      setUser(guestUser);
      router.push("/auth/log_in");
    }
  };
  return (
    <nav>
      {user.isAuthenticated ? (
        <AuthNav username={user.username} deleteCookie={deleteCookie} />
      ) : (
        <GuestNav />
      )}
    </nav>
  );
};

export default NavBar;
