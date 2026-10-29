
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen shrink-0 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        Dashboard
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          href="/dashboard"
          className={`p-3 rounded ${
            pathname === "/dashboard"
              ? "bg-blue-600"
              : "hover:bg-gray-700"
          }`}
        >
          Overview
        </Link>

        <Link
          href="/product"
          className={`p-3 rounded ${
            pathname === "/product"
              ? "bg-blue-600"
              : "hover:bg-gray-700"
          }`}
        >
          Products
        </Link>

        <Link
          href="/contact"
          className={`p-3 rounded ${
            pathname === "/contact"
              ? "bg-blue-600"
              : "hover:bg-gray-700"
          }`}
        >
          Contacts
        </Link>

        <Link
          href="/"
          className="p-3 rounded text-red-400 hover:bg-gray-700 mt-6"
        >
          Logout
        </Link>
      </nav>
    </aside>
  );
}
