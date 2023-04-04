import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/navbar/NavBar";
import { UserProvider } from "@/components/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div>
        <NavBar></NavBar>
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}
