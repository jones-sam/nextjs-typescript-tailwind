import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-400">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold text-4xl">
        Welcome to Next.js with Typescript and Tailwind
      </h1>
    </div>
  );
}
