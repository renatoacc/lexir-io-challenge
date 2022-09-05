import Head from "next/head";
import { NavBar } from "@components/NavBar";
import { BrandCollection } from "@components/BrandCollection";
import { Advertising } from "@components/Advertising";
import { Footer } from "@components/Footer";

export default function Home() {
  return (
    <div className="block">
      <Head>
        <title>Lexir</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <BrandCollection/>
        <Advertising/>
        <Footer/>
      </main>
    </div>
  );
}
