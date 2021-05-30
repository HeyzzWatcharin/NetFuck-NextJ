import Head from "next/head";
//import Navbar from "../component/Navbar"
import image from "next/image"
import { signIn, signOut, useSession } from "next-auth/client";
export default function login() {
    const [session, loading] = useSession();
  return (
      
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        backgroundImage:
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)",
      }}
    >
      <Head>
        <title>NetFuck</title>
        <link rel="icon" href="/Netfuckk.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <div>
        <img src="/netfuck.svg" alt="An SVG of an netfuck"  width={180} />
        </div>
        <div>
          {!session ? (
            <button
              className="bg-[#e50914] flex items-center text-white  text-sm px-4 py-2 rounded"
              onClick={() => signIn("google")}
            >
              Sign In
            </button>
          ) : (
            <button
              className="bg-[#e50914] flex items-center text-white  text-sm px-4 py-2 rounded"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          )}
        </div>
        <style jsx>{`
          .container {
            //background-color: red;
            display: flex;
            justify-content: space-between !important;
            padding-top: 2rem;
            padding-bottom: 1rem;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            width: 100%;
          }
        `}</style>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
            
        </div>
      </main>
    </div>
  );
}
