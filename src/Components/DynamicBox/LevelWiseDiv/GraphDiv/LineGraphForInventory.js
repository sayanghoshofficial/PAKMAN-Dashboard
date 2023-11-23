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
import { Loader } from 'rsuite';
import { apiUrl } from '../../../../Constant';


const LineGraphForInventory = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const convertDataForInventory = (dataArray) => {
        const sortedArray = dataArray.sort((a, b) => a.id - b.id);
        return sortedArray.map(item => {
            const dateParts = item.createdAt.split('/');
            const monthIndex = Number(dateParts[1]) - 1;
            const monthName = monthIndex >= 0 && monthIndex < 12
                ? ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][monthIndex]
                : 'Invalid Month';

            const formattedDate = `${monthName} ${dateParts[0]}`;
            const Range = [item['MIN INTANCES'], item['MAX INTANCES']];

            return { ...item, name: formattedDate, Range };
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}inventory`);
                const data = await response.json();
                const convertedData = convertDataForInventory(data)
                setData(convertedData);

                setLoading(false); // Set loading to false when data is fetched
            } catch (err) {
                console.error('Error fetching dropdown data:', err);
                setLoading(false); // Set loading to false in case of an error
            }
        };
        fetchData();
    }, [])
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

    if (loading) {
        return <Loader content="Loading..." vertical />
    }

    return (
        <div className={Style.GraphCointainer} >
            <div className={Style.graphWrapper}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={data}
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