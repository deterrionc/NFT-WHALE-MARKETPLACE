import React from 'react';
import GeneralInfos from './GeneralInfos';
import MoreSlider from './MoreSlider';
import Tabs from './Tabs';

export default function NftDetailPage() {
  return (
    <div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8 mt-28">
        <GeneralInfos />
        <Tabs />
        <MoreSlider />
      </div>
    </div>
  );
}