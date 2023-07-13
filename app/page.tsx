import Link from "next/link";
import { FaGithub, FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="https://github.com/cryskram/quizo">
          <FaGithub className="text-2xl" />
        </Link>
      </nav>
      <main className="w-full flex-col text-center min-h-screen flex justify-center items-center">
        <div>
          <h1 className="text-6xl font-semibold font-mono">Quizo</h1>
          <p className="font-mono text-slate-400">
            A simple quiz! Check it out
          </p>
          <Link href="/quiz">
            <button className="bg-green-500 hover:bg-green-700 py-1 px-2 text-2xl rounded-lg mt-2">
              Start Quiz
            </button>
          </Link>
        </div>
        <p className="absolute bottom-0 flex items-center">
          Made with
          <span>
            <FaHeart className="text-red-600 mx-2" />
          </span>
          by cryskram
        </p>
      </main>
    </div>
  );
}
