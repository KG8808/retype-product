
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar component */}
      <Sidebar />

      {/* Dashboard content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Dashboard!
        </h1>

        <p className="mt-3 text-gray-600">
          Fill your details.
        </p>
      </main>
    </div>
  );
}
