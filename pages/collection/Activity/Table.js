import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Table() {
  const [rows, setRows] = useState(10);
  const [numberArray, setNumberArray] = useState([]);

  useEffect(() => {
    const tempNumberArray = [];
    setNumberArray(tempNumberArray);
    for (let i = 0; i < rows; i += 1) {
      tempNumberArray.push(i);
    }
    setNumberArray(tempNumberArray);
  }, [rows]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-[#16151A] bg-opacity-40">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md text-gray-100 uppercase tracking-wider"
                    >
                      Transaction ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md text-gray-100 uppercase tracking-wider"
                    >
                      Transaction Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md text-gray-100 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md text-gray-100 uppercase tracking-wider"
                    >
                      Total Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md text-gray-100 capitalize tracking-wider"
                    >
                      Mint Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    numberArray.map(number => (
                      <tr key={number} className={number % 2 === 0 ? 'bg-[#111632]' : 'bg-[#111013]'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">qRCrq...CY1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 flex items-center gap-x-2">
                          Sold via Buy Now
                          <Image src="/assets/images/logo-tiny.png" alt="" width="20" height="20" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">about 1 hour ago</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">0.45 BNB</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">HmMbz ... e5V</td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className='w-3/5'>
          <div className='flex justify-end'>
            <nav className="px-4 flex items-center justify-center sm:px-0">
              <div className="hidden md:-mt-px md:flex">
                <button
                  className="text-gray-100 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  {'<'}
                </button>
                <button
                  className="text-gray-100 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  1
                </button>
                <button
                  className="text-gray-100 pt-4 px-4 inline-flex items-center text-sm font-medium"
                  aria-current="page"
                >
                  2
                </button>
                <button
                  className="text-gray-100 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  3
                </button>
                <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                  ...
                </span>
                <button
                  className="text-gray-100 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  10
                </button>
                <button
                  className="text-gray-100 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  {'>'}
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className='w-2/5'>
          <div className="flex justify-end">
            <select
              id="rows"
              name="rows"
              className="mt-1 block pl-3 pr-10 py-2 text-gray-100 focus:outline-none sm:text-sm rounded-md bg-transparent border-[#2D2C33] focus:border-[#2D2C33]"
              onChange={(e) => setRows(Number(e.target.value))}
            >
              <option value="10" className="bg-[#2D2C33]">10</option>
              <option value="20" className="bg-[#2D2C33]">20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}