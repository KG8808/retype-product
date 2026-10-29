
"use client";

type DataTableProps = {
  columnHeading: string[];
  data: Record<string, string | number>[];
};

export default function DataTable({
  columnHeading,
  data,
}: DataTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="min-w-full text-sm text-left">
        {/* Table headings */}
        <thead className="bg-gray-900 text-white">
          <tr>
            {columnHeading.map((heading) => (
              <th
                key={heading}
                className="px-6 py-4 font-semibold whitespace-nowrap"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table data */}
        <tbody className="divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                {columnHeading.map((heading) => (
                  <td
                    key={heading}
                    className="px-6 py-4 text-gray-700 whitespace-nowrap"
                  >
                    {item[heading] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columnHeading.length}
                className="px-6 py-8 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
