import { signIn, signOut, useSession } from "next-auth/client";

export default function Navbar() {
  const [session, loading] = useSession();
  return (
    <div className="container">
      <div>NetFuckk</div>
      <div className="justify-self-end">
        {!session ? (
          <button
            className="bg-[#e50914] flex items-center text-white  text-sm px-4 py-2 rounded"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        ) : (
          <button
            className="bg-[#e50914] flex items-center text-white  text-sm px-4 py-2 rounded"
            onClick={() => signIn()}
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
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 2rem;
          padding-right: 2rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
