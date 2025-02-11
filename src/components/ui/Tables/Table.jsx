import React from 'react';

const Table = ({ data, columns }) => {
  return (
    <>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left rtl:text-right border-gray-900">
        <thead className="text-xs uppercase bg-gray-200 text-center">
          <tr className="bg-gray-900 text-white">
            {columns.map((column) => (
              <th key={column.accessor} className="py-2 px-4 border-b">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-200 cursor-pointer text-gray-800 text-center">
              {columns.map((column) => (
                <td key={column.accessor} className="py-2 px-4 border-b border-gray-400">
                  {column.accessor.split('.').reduce((acc, part) => acc && acc[part], row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Table;
