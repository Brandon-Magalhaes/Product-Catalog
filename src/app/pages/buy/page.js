import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <h1 className="font-bold">Buy Page</h1>
      <Link href="/" className="mt-2">
        <span className="text-blue-500 hover:underline">Back To Home</span>
      </Link>
    </div>
  );
}
