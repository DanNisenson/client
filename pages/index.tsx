import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "./Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Super-heroes mock database</title>
        <meta name="description" content="My first client-and-server project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="main">
          <h2>Super Hero Database</h2>
        </main>
      </Layout>
    </>
  );
}
