import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <h1 className="font-bold">Login Page</h1>
      <Link href="/" className="mt-2">
        <span className="text-blue-500 hover:underline">Back To Home</span>
      </Link>
    </div>
  );
}
