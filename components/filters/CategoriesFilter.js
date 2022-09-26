import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Icon } from '@iconify/react';

const categories = [
  {
    name: 'new',
    icon: <Icon icon="foundation:burst-new" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'art',
    icon: <Icon icon="ic:baseline-palette" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'collectibles',
    icon: <Icon icon="bx:bx-box" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'music',
    icon: <Icon icon="bx:bxs-music" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'photography',
    icon: <Icon icon="bx:bx-box" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'trading cards',
    icon: <Icon icon="emojione-monotone:glowing-star" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'utility',
    icon: <Icon icon="entypo:wallet" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'casino',
    icon: <Icon icon="bi:patch-plus-fill" className="text-[#4E6AFF] text-3xl" />
  }
];

export default function CategoriesFilter() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };
  return (
    <>
      <button className={`inline-flex justify-between w-full rounded-t-md ${!opened && 'rounded-b-md'} px-4 py-3 bg-[#2D2C33] text-sm text-gray-100 mt-3`} onClick={handleOpened}>
        <p className="flex items-center gap-x-3 text-gray-100">
          <Icon icon="ant-design:tag-filled" />
          Categories
        </p>
        {opened ? (
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        )}
      </button>
      {
        opened && (
          <div className="w-full bg-[#222222] p-4 rounded-b-md">
            <div className="grid grid-cols-1 gap-2">
              {categories.map((category, index) => (
                <div key={index} className="w-full bg-[#2D2C33] px-3 py-2 flex justify-start items-center gap-x-3 rounded-lg">
                  <button
                    type="button"
                    className="p-1 border border-transparent rounded-full shadow-sm bg-[#3E3D45] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E3D45]"
                  >
                    {category.icon}
                  </button>
                  <span className='text-gray-100 capitalize'>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </>
  );
}