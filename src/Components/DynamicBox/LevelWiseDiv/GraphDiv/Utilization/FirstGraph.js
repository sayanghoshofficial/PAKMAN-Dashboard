import React from 'react'
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line } from 'recharts';

const FirstGraph = ({ graphData }) => {
    const cpuData = graphData.read.map((value, index) => ({
        id: index + 1,
        value: value
    }));
    // Generate custom Y-axis ticks at intervals of $200,000
  const generateYAxisTicks = () => {
    const ticks = [];
    for (let i = 0; i <= 20; i += 10) {
      ticks.push(i);
    }
    return ticks;
  };
    const formatYAxisTick = (tick) => {
        if (tick === 0) return '0%';
        else if (tick === 10) return '10%';
        else if (tick === 20) return '20%';
        return tick;
    }
    const tooltipFormatter = (value) => `${value}%`;

    return (
        <ResponsiveContainer>
            <LineChart data={cpuData}>
                <XAxis
                    dataKey={'id'}
                    tick={{ display: 'none' }}
                    tooltip={false}
                />
                <YAxis
                    domain={[0, 20]}
                    axisLine={false}
                    ticks={generateYAxisTicks()}
                    tick={{ fontSize: '10px' }}
                    tickFormatter={formatYAxisTick}
                    label={{ value: 'CPU', angle: -90, position: 'insideLeft', fontSize:'12px' }}
                />
                <Tooltip
                    wrapperStyle={{ backgroundColor: '#292929ff' }}
                    contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none', color: '#fff', fontSize: '12px' }}
                    labelStyle={{ display: 'none' }}
                    formatter={tooltipFormatter}
                />
                <Line
                    dataKey='value'
                    dot={false}
                    strokeWidth={2}
                    stroke="#ed0295"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default FirstGraph;
