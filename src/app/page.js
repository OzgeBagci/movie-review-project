"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Movie Review App</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        className="p-2 w-1/2 mb-8 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none"
      />
      <div className="flex flex-wrap justify-center w-full">
        {/* Placeholder movie data */}
        <div className="w-64 m-4 bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl">Movie Title</h2>
          <p className="text-gray-400">Rating: 8.0/10</p>
        </div>
        <div className="w-64 m-4 bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl">Movie Title</h2>
          <p className="text-gray-400">Rating: 7.5/10</p>
        </div>
      </div>
      <Link href="/login">
        <p className="text-blue-500 mt-4 hover:underline">Go to Login</p>
      </Link>
    </div>
  );
}
