import CostIcon from '../Assets/IconImage/dollar.png';
import InventoryIcon from '../Assets/IconImage/connection.png';
import MoniteringIcon from '../Assets/IconImage/monitoring.png';
import UtilizationIcon from '../Assets/IconImage/pie-chart.png';
import CompleanceIcon from '../Assets/IconImage/correct.png';
import StorageIcon from '../Assets/IconImage/database.png';

const dataForCost = [
    { id: 1, name: "JUN", 'ACTUAL COST': 690000, 'PROJECTED COST': 498000, 'ACTUAL RUN RATE': 800000 },
    { id: 2, name: "JUL", 'ACTUAL COST': 500000, 'PROJECTED COST': 600000, 'ACTUAL RUN RATE': 900000 },
    { id: 3, name: "AUG", 'ACTUAL COST': 600000, 'PROJECTED COST': 750000, 'ACTUAL RUN RATE': 850000 },
    { id: 4, name: "SEP", 'ACTUAL COST': 300000, 'PROJECTED COST': 620000, 'ACTUAL RUN RATE': 870000 },
    { id: 5, name: "OCT", 'PROJECTED COST': 520000, 'ACTUAL RUN RATE': 900000 },
    { id: 6, name: "NOV", 'PROJECTED COST': 650000, 'ACTUAL RUN RATE': 600000 },
];

const dataForInventory = [
    { id: 1, name: "AUG 02", 'MIN INTANCES': 240, 'MID INTANCES': 300, 'MAX INTANCES': 370, Range: [240, 370] },
    { id: 2, name: "AUG 03", 'MIN INTANCES': 200, 'MID INTANCES': 250, 'MAX INTANCES': 300, Range: [200, 300] },
    { id: 3, name: "AUG 04", 'MIN INTANCES': 180, 'MID INTANCES': 280, 'MAX INTANCES': 350, Range: [180, 350] },
    { id: 4, name: "AUG 05", 'MIN INTANCES': 220, 'MID INTANCES': 760, 'MAX INTANCES': 1000, Range: [220, 1000] },
    { id: 5, name: "AUG 06", 'MIN INTANCES': 160, 'MID INTANCES': 300, 'MAX INTANCES': 300, Range: [160, 300] },
];
const dataForMonitoring = [
    { id: 1, value: 50 }, { id: 2, value: 40 }, { id: 3, value: 30 }, { id: 4, value: 50 },
    { id: 5, value: 60 }, { id: 6, value: 95 }, { id: 7, value: 54 }, { id: 8, value: 44 },
    { id: 9, value: 50 }, { id: 10, value: 40 }, { id: 11, value: 30 }, { id: 12, value: 50 },
    { id: 13, value: 60 }, { id: 14, value: 65 }, { id: 15, value: 54 }, { id: 16, value: 44 },
    { id: 17, value: 50 }, { id: 18, value: 40 }, { id: 19, value: 30 }, { id: 20, value: 50 },
    { id: 21, value: 60 }, { id: 22, value: 65 }, { id: 23, value: 54 }, { id: 24, value: 44 },
    { id: 25, value: 50 }, { id: 26, value: 40 }, { id: 27, value: 77 }, { id: 28, value: 50 },
    { id: 29, value: 60 }, { id: 30, value: 65 }, { id: 31, value: 54 }, { id: 32, value: 44 },
    { id: 33, value: 50 }, { id: 34, value: 40 }, { id: 35, value: 30 }, { id: 36, value: 50 },
    { id: 37, value: 60 }, { id: 38, value: 65 }, { id: 39, value: 54 }, { id: 40, value: 44 },
]

const DynamicElementGraphData = [
    {
        id: 1,
        name: 'COST',
        icon: CostIcon,
        graphData: dataForCost,
        bottomContaint: {
            value: '$24.0K',
            rightTop: '/Day',
            rightDown: 'Run Rate'
        },
        thirdBox: [
            {
                value: '$0.40',
                unit: '/Instance HR'
            }
        ]
    },
    {
        id: 2,
        name: 'MONITORING',
        graphData: dataForMonitoring,
        icon: MoniteringIcon,
        bottomContaint: {
            value: '3.4M',
            rightTop: 'Requests',
            rightDown: 'Last 5 hours 30 minutes'
        },
        bottomExtra: {
            value: '3,412',
            anotherValue: 'Unique Visitors'
        },
        thirdBox: [
            {
                value: '30.5K',
                unit: 'TMNG'
            },
            {
                value: '10.0K',
                unit: 'SOCL'
            },
            {
                value: '17.4K',
                unit: 'REBL'
            }
        ]
    },
    {
        id: 3,
        name: 'INVENTORY',
        icon: InventoryIcon,
        graphData: dataForInventory,
        bottomContaint: {
            value: '$6.5K',
            rightTop: 'current',
            rightDown: 'instances'
        },
        bottomExtra: {
            value: '25.0K',
            anotherValue: 'Unique Last 30 days'
        },
        thirdBox: [
            {
                value: '153',
                unit: 'LBs'
            },
            {
                value: '57',
                unit: 'ASG'
            },
            {
                value: '132',
                unit: 'S3'
            },
            {
                value: '9000',
                unit: 'EBS'
            }
        ]


    },
    {
        id: 4,
        name: 'UTILIZATION',
        icon: UtilizationIcon,
        bottomContaint: {
            value: '39%',
            rightTop: '',
            rightDown: 'Overall'
        },
        thirdBox: [
            {
                value: '',
                unit: 'CPU'
            },
            {
                value: '',
                unit: 'I/O'
            },
            {
                value: '',
                unit: 'DISK'
            }
        ]
    },
    {
        id: 5,
        name: 'COMPLIANCE',
        icon: CompleanceIcon,
        bottomContaint: {
            value: '99.82%',
            rightTop: 'Compliance',
            rightDown: 'All Apps'
        },
        bottomExtra: {
            value: '58',
            anotherValue: 'Rules'
        },
        thirdBox: [
            {
                value: '98.4',
                sign: '%',
                unit: 'TMNG',
            },
            {
                value: '98.1',
                sign: '%',
                unit: 'REBL'
            },
            {
                value: '96.7',
                sign: '%',
                unit: 'SOCL'
            }
        ]
    },
    {
        id: 6,
        name: 'STORAGE',
        icon: StorageIcon,
        bottomContaint: {
            value: '4.15',
            rightTop: '',
            rightDown: 'PB In Use'
        },
        thirdBox: [
            {
                value: '1.25',
                sign: 'PB',
                unit: 'EBs'
            },
            {
                value: '1.50',
                sign: 'PB',
                unit: 'S3'
            },
            {
                value: '0.65',
                sign: 'PB',
                unit: 'Other'
            }
        ]
    },

]

export default DynamicElementGraphData;