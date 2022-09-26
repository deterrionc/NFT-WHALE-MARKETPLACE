import React, { useMemo } from 'react';

import { Chart } from 'react-charts';

export default function MyChart() {
  const data = useMemo(
    () => [
      // {
      //   label: 'Series 1',
      //   data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      // },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div className="w-full" style={{ height: '400px' }}>
      <Chart data={data} axes={axes} />
    </div>
  );
}