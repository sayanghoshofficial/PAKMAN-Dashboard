import React from 'react';
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip } from 'recharts';


const ThirdGraph = ({ graphData }) => {
    const DiskData = graphData.input.map((value, index) => ({
        id: index + 1,
        input: value,
        output: graphData.output[index]
    }));
    const generateYAxisTicks = () => {
        const ticks = [];
        for (let i = 0; i <= 100; i += 50) {
            ticks.push(i);
        }
        return ticks;
    };
    const formatYAxisTick = (tick) => {
        if (tick === 0) return '0MB';
        else if (tick === 50) return '50MB';
        else if (tick === 100) return '100MB';
        return tick;
    }
    const tooltipFormatter = (value) => `${value}mb`;
    return (
        <ResponsiveContainer>
            <LineChart data={DiskData}>
                <XAxis
                    dataKey={'id'}
                    tick={{ display: 'none' }}
                    tooltip={false}
                />
                <YAxis
                    domain={[0, 100]}
                    axisLine={false}
                    ticks={generateYAxisTicks()}
                    tick={{ fontSize: '10px' }}
                    tickFormatter={formatYAxisTick}
                    label={{ value: 'DISK', angle: -90, position: 'insideLeft', fontSize: '12px' }}
                />
                <Tooltip
                    wrapperStyle={{ backgroundColor: '#292929ff' }}
                    contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none', color: '#fff', fontSize: '12px' }}
                    labelStyle={{ display: 'none' }}
                    formatter={tooltipFormatter}
                />
                <Line
                    dataKey='input'
                    dot={false}
                    strokeWidth={2}
                    stroke="#f0a62d"
                />
                <Line
                    dataKey='output'
                    dot={false}
                    strokeWidth={2}
                    stroke="#ed0295"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ThirdGraph
