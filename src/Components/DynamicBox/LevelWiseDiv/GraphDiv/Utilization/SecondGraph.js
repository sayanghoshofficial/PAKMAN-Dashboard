import React from 'react'
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip } from 'recharts';

const SecondGraph = ({ graphData }) => {
    const IOData = graphData.read.map((value, index) => ({
        id: index + 1,
        read: value,
        write: graphData.write[index]
    }));

    const generateYAxisTicks = () => {
        const ticks = [];
        for (let i = 0; i <= 400; i += 200) {
            ticks.push(i);
        }
        return ticks;
    };
    const formatYAxisTick = (tick) => {
        if (tick === 0) return '0kb/s';
        else if (tick === 200) return '200kb/s';
        else if (tick === 400) return '400kb/s';
        return tick;
    }
    const tooltipFormatter = (value) => `${value}KB`;
    return (
        <ResponsiveContainer>
            <LineChart data={IOData}>
                <XAxis
                    dataKey={'id'}
                    tick={{ display: 'none' }}
                />
                <YAxis
                    domain={[0, 400]}
                    axisLine={false}
                    ticks={generateYAxisTicks()}
                    tick={{ fontSize: '10px' }}
                    tickFormatter={formatYAxisTick}
                    label={{ value: 'I/O', angle: -90, position: 'insideLeft', fontSize: '12px' }}
                />
                <Tooltip
                wrapperStyle={{ backgroundColor: '#292929ff' }}
                contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none', color: '#fff', fontSize: '12px' }}
                labelStyle={{ display: 'none' }}
                formatter={tooltipFormatter}
            />
                <Line
                    dataKey='read'
                    dot={false}
                    strokeWidth={2}
                    stroke='#b8d66d'
                />
                <Line
                    dataKey='write'
                    dot={false}
                    strokeWidth={2}
                    stroke='#af62f3'
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SecondGraph
