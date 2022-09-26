import React from 'react';
import TableSection from './TableSection';
import TitleSection from './TitleSection';

export default function Ranking() {
  return (
    <div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8 mt-28">
        <TitleSection />
        <TableSection />
      </div>
    </div>
  );
}