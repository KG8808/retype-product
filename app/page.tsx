
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  function handleLogin() {
    if (username.trim() === "1234" && password === "1234") {
      setError("");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-800">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          LOGIN
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-3 rounded mb-4 text-black"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded mb-4 text-black"
          />

          {error && (
            <p className="text-red-600 mb-4">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-red-800"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
