import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Pradeep', salary: 50000 },
    { name: 'Deepak', salary: 15000 },
    { name: 'Pooja', salary: 80000 },
    { name: 'Archana', salary: 120000 },
  ];

  const Chart = () => {

    const renderColor = (value) => {
        if (value < 20000) return 'red';
        if (value > 100000) return 'green';
         
    };
    return (
        <div>
      <h1>Salary Bar Chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill= {renderColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart