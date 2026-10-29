
"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";

type Product = {
  Name: string;
  Price: number;
  Category: string;
};

export default function ProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !price.trim() || !category.trim()) {
      alert("Please fill all fields!");
      return;
    }

    const productPrice = Number(price);

    if (!Number.isFinite(productPrice) || productPrice <= 0) {
      alert("Enter a valid price!");
      return;
    }

    // Pudhu product-ai table data-la add pannum
    setProducts((previous) => [
      ...previous,
      {
        Name: name.trim(),
        Price: productPrice,
        Category: category.trim(),
      },
    ]);

    // Form reset pannitu popup close pannum
    setName("");
    setPrice("");
    setCategory("");
    setShowForm(false);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Products
          </h1>

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Product
          </button>
        </div>

        {/* Add Product popup */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  Add New Product
                </h2>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-2xl text-gray-500 hover:text-black"
                  aria-label="Close popup"
                >
                  ×
                </button>
              </div>

              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border p-3 text-blue-600"
                required
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0.01"
                step="0.01"
                className="w-full rounded-lg border p-3 text-blue-600"
                required
              />

              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border p-3 text-blue-600"
                required
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-lg border px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reusable table */}
        <DataTable
          columnHeading={["Name", "Price", "Category"]}
          data={products}
        />
      </main>
    </div>
  );
}
