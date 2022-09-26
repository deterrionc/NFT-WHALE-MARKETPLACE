import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function TableSection() {
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(100);
  const [numberArray, setNumberArray] = useState([]);

  const handleRowNumbers = (scope) => {
    const tempNumberArray = [];
    const tempStartNumber = Number(scope.split('-')[0]);
    const tempEndNumber = Number(scope.split('-')[1]);

    setStartNumber(tempStartNumber);
    setEndNumber(tempEndNumber);

    for (let i = tempStartNumber; i <= tempEndNumber; i += 1) {
      tempNumberArray.push(i);
    }

    setNumberArray(tempNumberArray);
  };

  useEffect(() => {
    const tempNumberArray = [];
    for (let i = startNumber; i < endNumber; i += 1) {
      tempNumberArray.push(i);
    }
    setNumberArray(tempNumberArray);
  }, []);

  return (
    <div className='mt-12'>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-transparent">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-light text-gray-200 uppercase tracking-wider flex items-center gap-x-2"
                    >
                      Collection
                      <select
                        id="days"
                        name="days"
                        className="text-gray-100 bg-transparent border-gray-500 text-xs"
                        onClick={(e) => handleRowNumbers(e.target.value)}
                      >
                        <option className='bg-[#222222]' value="1-100">1-100</option>
                        <option className='bg-[#222222]' value="101-200">101-200</option>
                        <option className='bg-[#222222]' value="201-300">201-300</option>
                        <option className='bg-[#222222]' value="301-400">301-400</option>
                      </select>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-light text-gray-200 uppercase tracking-wider"
                    >
                      <div className='flex justify-center items-center gap-x-2'>
                        <Icon icon="simple-icons:binance" />
                        floor price
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-light text-gray-200 uppercase tracking-wider"
                    >
                      <div className='flex justify-center items-center gap-x-2'>
                        floor price %
                        <span className="inline-flex items-center px-1 py-0.5 text-sm bg-[#202851] text-gray-200 lowercase">
                          24h
                        </span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-light text-gray-200 uppercase tracking-wider"
                    >
                      <div className='flex justify-center items-center gap-x-2'>
                        <Icon icon="simple-icons:binance" />
                        avg price
                        <span className="inline-flex items-center px-1 py-0.5 text-sm bg-[#202851] text-gray-200 lowercase">
                          24h
                        </span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-light text-gray-200 uppercase tracking-wider"
                    >
                      <div className='flex justify-center items-center gap-x-2'>
                        avg price %
                        <span className="inline-flex items-center px-1 py-0.5 text-sm bg-[#202851] text-gray-200 lowercase">
                          24h
                        </span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-light text-gray-200 uppercase tracking-wider"
                    >
                      <div className='flex justify-center items-center gap-x-2'>
                        <Icon icon="simple-icons:binance" />
                        volume
                        <span className="inline-flex items-center px-1 py-0.5 text-sm bg-[#202851] text-gray-200 lowercase">
                          24h
                        </span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-light text-gray-200 uppercase tracking-wider"
                    >
                      <div className='flex justify-center items-center gap-x-2'>
                        vloume %
                        <span className="inline-flex items-center px-1 py-0.5 text-sm bg-[#202851] text-gray-200 lowercase">
                          24h
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#111013]">
                  {
                    numberArray.map(number => (
                      <tr key={number}>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-200">
                          <div className='flex items-center gap-x-8'>
                            {number}
                            <Image
                              src="/assets/images/nft_detail_tiny.png"
                              alt=""
                              width={93}
                              height={96}
                            />
                            Chimpanzee Tribe
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-gray-200 text-center">6.8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-500 text-center">+473.51</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-200 text-center">225.56</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-500 text-center">+473.51</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-200 text-center">16.3</td>
                        <td className="px-6 py-4 whitespace-nowrap text-red-500 text-center">-173.27</td>
                      </tr>
                    ))
                  }
                  {/* {data.map((dataItem, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{dataItem.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{dataItem.from}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}