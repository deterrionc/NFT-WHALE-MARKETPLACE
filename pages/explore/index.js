import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import ArtworksTab from './ArtworksTab';
import CollectionsTab from './CollectionsTab';

const tabs = [
  {
    name: 'Artworks',
    icon: <Icon icon="clarity:image-line" className="text-lg" />,
    content: <ArtworksTab />,
  },
  {
    name: 'Collections',
    icon: <Icon icon="clarity:box-plot-line" className="text-lg" />,
    content: <CollectionsTab />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Explore() {
  const [tabName, setTabName] = useState('Artworks');
  const [tabContent, setTabContent] = useState(ArtworksTab);

  const handleTab = (tab) => {
    setTabName(tab.name);
    setTabContent(tab.content);
  };
  return (
    <div className="relative bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 gap-x-8">
        {/* Tabs */}
        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full focus:ring-gray-100 focus:border-gray-100 border-gray-300 rounded-md"
              value={tabName}
              onChange={() => handleTab(tabs.find(tabItem => tabItem.name === tabName))}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="">
              <nav className="-mb-px flex" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => handleTab(tab)}
                    className={classNames(
                      tab.name === tabName
                        ? 'border-gray-100 text-gray-100'
                        : 'border-transparent text-gray-100 hover:text-gray-400',
                      'w-1/12 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-x-2'
                    )}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
        {tabContent}
      </div>
    </div>
  );
}