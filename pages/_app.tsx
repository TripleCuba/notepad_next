import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/navbar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}
