import React, { useEffect, useState } from 'react';
import Style from './graph.module.css';
import {
    CartesianGrid,
    Line,
    ComposedChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area
} from 'recharts';


const LineGraphForInventory = ({ graphData }) => {
    
    const generateYAxisTicks = () => {
        const ticks = [];
        for (let i = 0; i <= 1000; i += 200) {
            ticks.push(i)
        }
        return ticks;
    }

    const formatYAxisTick = (tick) => {
        if (tick === 1000) return '1K'
        return tick;
    }
    return (
        <div className={Style.GraphCointainer} >
            <div className={Style.graphWrapper}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={graphData}
                        width={400}
                        height={40}
                    >
                        <CartesianGrid stroke='#ccc' />
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: '12px' }}
                            axisLine={false}
                        />
                        <YAxis
                            domain={[0, 1000]}
                            ticks={generateYAxisTicks()}
                            tickFormatter={formatYAxisTick}
                            tick={{ fontSize: '12px' }}
                            axisLine={false}
                            label={{ value: 'INSTANCES', angle: -90, position: 'insideLeft' }}
                        />
                        <Tooltip

                            wrapperStyle={{ backgroundColor: '#292929ff' }}
                            contentStyle={{ backgroundColor: 'rgba (0, 0, 0, 0.5)', border: 'none', color: '#fff' }}
                            labelStyle={{ display: 'none' }}
                        />
                        <Legend
                            wrapperStyle={{ fontSize: '10px', bottom: '-13px' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="MAX INTANCES"
                            stroke='#54a0ffff'
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={true}
                            legendType='plainline'
                        />
                        <Line
                            type="monotone"
                            dataKey="MID INTANCES"
                            stroke='#ed0295ff'
                            strokeWidth={2}
                            strokeDasharray={[3, 2]}
                            dot={false}
                            isAnimationActive={true}

                        />
                        <Line
                            type="monotone"
                            dataKey="MIN INTANCES"
                            stroke='#367b6b'
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={true}
                            legendType='plainline'
                        />
                        <Area
                            type="monotone"
                            dataKey="Range"
                            stroke='none'
                            fillOpacity={0.5}
                            fill="#cdcdcdff"
                            legendType='none'
                            tooltipType='none'
                        />

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LineGraphForInventory;