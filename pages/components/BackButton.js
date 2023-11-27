import Link from "next/link";
export const BackButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      <Link href="/">Back</Link>
    </button>
  );
};
