
"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Contact details store pannum state
  const [contacts, setContacts] = useState<
    { Name: string; Email: string; Phone: string }[]
  >([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Ella fields-um fill pannirukkomanu check pannum
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill all fields!");
      return;
    }

    // Pudhu contact-ai list-la add pannum
    setContacts((previousContacts) => [
      ...previousContacts,
      {
        Name: name,
        Email: email,
        Phone: phone,
      },
    ]);

    // Form fields clear pannum
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Contacts
        </h1>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow mb-8 space-y-4"
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded text-red-800"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded text-red-800"
          />

          <input
            type="tel"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded text-red-800"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Add Contact
          </button>
        </form>

        {/* Corrected: contact illa, contacts */}
        <DataTable
          columnHeading={["Name", "Email", "Phone"]}
          data={contacts}
        />
      </main>
    </div>
  );
}
