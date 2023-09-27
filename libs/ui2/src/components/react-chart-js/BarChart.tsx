import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function BarChart({ chartData }: any) {
  return (
    <div className={`${null} w-full m-12 center`}>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
