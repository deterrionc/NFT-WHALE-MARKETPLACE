import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ActivitiesTab() {
  const [numberArray, setNumberArray] = useState([]);

  useEffect(() => {
    const tempNumberArray = [];
    setNumberArray(tempNumberArray);
    for (let i = 0; i < 12; i += 1) {
      tempNumberArray.push(i);
    }
    setNumberArray(tempNumberArray);
  }, []);

  return (
    <div className='bg-[#16151A] bg-opacity-60 p-5 mt-8 h-[45rem]'>
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
    </div>
  );
}