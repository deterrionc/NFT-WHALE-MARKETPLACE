import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import AttributesTab from './AttributesTab';
import DetailsTab from './DetailsTab';
import PriceHistoryTab from './PriceHistoryTab';
import OffersTab from './OffersTab';
import ActivitiesTab from './ActivitiesTab';

const tabs = [
  {
    name: 'attributes',
    icon: <Icon icon="si-glyph:hat" className="text-lg" />,
    content: <AttributesTab />,
  },
  {
    name: 'details',
    icon: <Icon icon="ep:document" className="text-lg" />,
    content: <DetailsTab />,
  },
  {
    name: 'price history',
    icon: <Icon icon="ant-design:tag-filled" className="text-lg" />,
    content: <PriceHistoryTab />,
  },
  {
    name: 'offers',
    icon: <Icon icon="icon-park-outline:database-forbid" className="text-lg" />,
    content: <OffersTab />,
  },
  {
    name: 'activities',
    icon: <Icon icon="fluent:pulse-square-24-regular" className="text-lg" />,
    content: <ActivitiesTab />,
  }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {

  const [tabName, setTabName] = useState('attributes');
  const [tabContent, setTabContent] = useState(AttributesTab);

  const handleTab = (tab) => {
    setTabName(tab.name);
    setTabContent(tab.content);
  };

  return (
    <div className="mt-20">
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
          <div className="border-b border-gray-500">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTab(tab)}
                  className={classNames(
                    tab.name === tabName
                      ? 'border-gray-100 text-gray-100'
                      : 'border-transparent text-gray-400 hover:text-gray-400',
                    'w-1/12 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-x-2 uppercase'
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
  );
}