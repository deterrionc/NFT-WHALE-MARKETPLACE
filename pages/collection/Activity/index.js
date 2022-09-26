import React, { useState } from 'react';
import DaysSelect from './DaysSelect';
import EventTypeFilter from './EventTypeFilter';
import Table from './Table';
import MyChart from './MyChart';

export default function Activity() {
  const [visibleChart, setVisibleChart] = useState(false);
  return (
    <div className='pt-6'>
      <div className='flex gap-x-12'>
        <div className="w-1/4">
          <EventTypeFilter visibleChart={visibleChart} setVisibleChart={setVisibleChart} />
        </div>
        <div className="w-3/4">
          {visibleChart && <DaysSelect />}
          <MyChart />
          <Table />
        </div>
      </div>
    </div>
  );
}