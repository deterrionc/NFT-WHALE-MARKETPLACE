import React from 'react';

const data = [
  {
    price: '17 BNB',
    from: 'HE3ZYk4aWfKD7R9EmFQbxjj75JdgHuDztNAsseKVan82'
  },
  {
    price: '18 BNB',
    from: 'HE3ZYk4aWfKD7R9EmFQbxjj75JdgHuDztNAsseKVan82'
  }
];

export default function OffersTab() {
  return (
    <div className='bg-[#16151A] bg-opacity-60 p-5 mt-8 h-[45rem]'>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div>
              <table className="min-w-full">
                <thead className="bg-transparent">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg font-light text-gray-200 uppercase tracking-wider"
                    >
                      PRICE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg font-light text-gray-200 uppercase tracking-wider"
                    >
                      FROM
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#111013]">
                  {data.map((dataItem, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{dataItem.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{dataItem.from}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}