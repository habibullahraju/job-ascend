import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
    {
      name: "Assignment 1",
      Marks: 60,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Assignment 2",
      Marks: 60,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Assignment 3",
      Marks: 60,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Assignment 4",
      Marks: 60,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Assignment 5",
      Marks: 60,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Assignment 6",
      Marks: 53,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Assignment 7",
      Marks: 60,
      pv: 4300,
      amt: 2100
    }
  ];


  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));
  
    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }
  
    return dataMax / (dataMax - dataMin);
  };
  
  const off = gradientOffset();
const ReChart = () => {
    return (
        <div className='lg:flex justify-center mt-10'>
            <div className='p-5 lg:p3'>
            <div className="card card-side bg-base-100 shadow-xl">
  
  <div className="card-body flex-grow">
    <h2 className="card-title">I have shown my seven Assignment numbers</h2>
    <p>When i started this course with Programming Hero.i never believed, one day i finish assignment nine.we are always get love from programming hero team.we are loved programmig hero team.always pray for you.</p>
    <div className="card-actions justify-end">
        
Sorry if wrong <br />
        Thank You!
    </div>
  </div>
</div>

            </div>

            
            <AreaChart
      width={850}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="green" stopOpacity={1} />
          <stop offset={off} stopColor="red" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="Marks"
        stroke="#000"
        fill="url(#splitColor)"
      />
    </AreaChart>
       
        </div>
    );
};

export default ReChart;