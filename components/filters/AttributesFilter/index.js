import React, { Fragment, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Icon } from '@iconify/react';
import SubFilter from './SubFilter';

const data = [
  {
    title: 'background',
    subData: [
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
    ]
  },
  {
    title: 'body',
    subData: [
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
    ]
  },
  {
    title: 'clothes',
    subData: [
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
    ]
  },
  {
    title: 'ears',
    subData: [
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
    ]
  },
  {
    title: 'eyes',
    subData: [
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
    ]
  },
  {
    title: 'face',
    subData: [
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
      {
        name: 'body',
        value: 'floor 6 bnb'
      },
      {
        name: 'face',
        value: 'floor 6 bnb'
      },
      {
        name: 'nose',
        value: 'floor 6 bnb'
      },
      {
        name: 'mouth',
        value: 'floor 6 bnb'
      },
      {
        name: 'shoes',
        value: 'floor 6 bnb'
      },
    ]
  }
];

export default function AttributesFilter() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };
  return (
    <>
      <button className={`inline-flex justify-between w-full rounded-t-md ${!opened && 'rounded-b-md'} px-4 py-3 bg-[#2D2C33] text-sm text-gray-100 mt-3`} onClick={handleOpened}>
        <p className="flex items-center gap-x-3 text-gray-100">
          <Icon icon="si-glyph:hat" />
          Attributes filter
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
              {data.map((dataItem, index) => (
                <SubFilter key={index} dataItem={dataItem} />
              ))}
            </div>
          </div>
        )
      }
    </>
  );
}

