import React from "react";
import { TableProps } from "../utils/types";

const TableComponent = <T,>(props: TableProps<T>) => {
  return (
    <div className="w-full">
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200 rounded-sm">
            <tr>
              {props.titles.map((each, index) => (
                <th
                  key={index}
                  className={"p-3 tracking-wide text-sm text-left"}
                >
                  {each}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-120">
            {props.data.map((each, index) => (
              <tr key={index} className="bg-white">
                {Object.values(each as string).map((item, index) => (
                  <td
                    key={index}
                    className="p-3 text-[.75rem] text-gray-700 whitespace-nowrap"
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
