import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SimpleScatterChart = () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 777 },
    { x: 110, y: 280, z: 345 },
    { x: 366, y: 45, z: 442 },
    { x: 215, y: 456, z: 222 },
    { x: 245, y: 785, z: 244 },
    { x: 644, y: 464, z: 64 },
    { x: 110, y: 475, z: 66 },
    { x: 345, y: 555, z: 45 },
    { x: 642, y: 765, z: 200 },
    { x: 212, y: 999, z: 989 },
    { x: 345, y: 210, z: 242 },
    { x: 358, y: 445, z: 346 },
    { x: 23, y: 65, z: 567 },
    { x: 45, y: 78, z: 457 },
  ];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <ScatterChart width={100} height={400}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default SimpleScatterChart;