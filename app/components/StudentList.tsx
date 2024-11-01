import React from "react";

const StudentList = () => {
  return (
    <div className="w-full">
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200 rounded-sm">
            <tr>
              <th className={"p-3 tracking-wide text-sm text-left"}>#</th>
              <th className={"p-3 tracking-wide text-sm text-left"}>Name</th>
              <th className={"p-3 tracking-wide text-sm text-left"}>Class</th>
              <th className={"p-3 tracking-wide text-sm text-left"}>Term</th>
              <th className={"p-3 tracking-wide text-sm text-left"}>Year</th>
              <th className={"p-3 tracking-wide text-sm text-left"}>Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-120">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                John Doe
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Form 1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                2021
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                400
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                John Doe
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Form 1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                2021
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                400
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                John Doe
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Form 1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                2021
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                400
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
