import { AppProps } from "next/app";
import "../styles/portfolio.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
