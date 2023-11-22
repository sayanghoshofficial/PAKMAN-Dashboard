import React, { useEffect, useState } from 'react';
import Style from './graph.module.css';
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
  CartesianGrid
} from 'recharts';
import { Loader } from 'rsuite';


const BarWithLineGraph = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const addNameFromCreatedAt = (array) => {
    const sortedArray = array.sort((a, b) => a.id - b.id);
    return sortedArray.map(item => {
      const name = item.createdAt.toString().slice(-3); // Get the last three characters of createdAt
      return { ...item, name };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/cost');
        const data = await response.json();
        // Convert createdAt to month names
        const convertedData = addNameFromCreatedAt(data)
        setData(convertedData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        console.error('Error fetching dropdown data:', err);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, [])

  // Generate custom Y-axis ticks at intervals of $200,000
  const generateYAxisTicks = () => {
    const ticks = [];
    for (let i = 0; i <= 1000000; i += 200000) {
      ticks.push(i);
    }
    return ticks;
  };

  // Custom function to format Y-axis ticks as monetary values
  const formatYAxisTick = (tick) => {
    if (tick === 0) return '$0';
    if (tick === 200000) return '$200k';
    if (tick === 400000) return '$400k';
    if (tick === 600000) return '$600k';
    if (tick === 800000) return '$800k';
    if (tick === 1000000) return '$1M';
    return tick;
  };
  const generateRightYAxisTicks = () => {
    const ticks = [0, 0.1, 0.2, 0.3, 0.4, 0.5];
    return ticks;
  };
  if(loading){
    return <Loader content="Loading..." vertical/>
  }

  return (
    <div className={Style.GraphCointainer} >
      <div className={Style.graphWrapper}>
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart
            data={data}
            width={400}
            height={40}
            barGap={0}
          >
            <CartesianGrid stroke="#ccc" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: '12px' }} />
            <YAxis
              domain={[0, 1000000]}
              axisLine={false}
              ticks={generateYAxisTicks()}
              tick={{ fontSize: '12px' }}
              tickFormatter={formatYAxisTick}
              label={{ value: 'COST', angle: -90, position: 'insideLeft' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 0.5]}
              axisLine={false}
              ticks={generateRightYAxisTicks()}
              tick={{ fontSize: '12px' }}
              label={{ value: 'RUN RATE', angle: 90, position: 'insideRight' }}
            />
            <Tooltip

              wrapperStyle={{ backgroundColor: '#292929ff' }}
              contentStyle={{ backgroundColor: 'rgba (0, 0, 0, 0.5)', border: 'none', color: '#fff' }}
              labelStyle={{ display: 'none' }}
            />
            <Legend
              wrapperStyle={{ fontSize: '10px', bottom: '-13px' }}
            />
            <Bar
              dataKey='ACTUAL COST'
              fill='#ed0295'
              barSize={25}
              isAnimationActive={true} />
            <Bar
              dataKey="PROJECTED COST"
              fill='#cdcdcd' barSize={25}
              isAnimationActive={true} />
            <Line
              type="monotone"
              dataKey="ACTUAL RUN RATE"
              stroke="#ed0295"
              dot={false}
              isAnimationActive={true}
              legendType='plainline'
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarWithLineGraph;