import Head from "next/head";
import { Navigation } from "@components/Navigation";
import { Footer } from "@components/Footer";
import { Main } from "@components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neohealth</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap&text=Neohalt"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Main />
    </>
  );
}
