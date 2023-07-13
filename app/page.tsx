import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-4xl font-semibold">Quizo</h1>
        <Link href="/quiz">
          <button className="bg-green-500 hover:bg-green-700 py-1 px-2 text-xl rounded-lg mt-2">
            Start
          </button>
        </Link>
      </div>
    </main>
  );
}
