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
const dataForStorage = [
    { id: 1, name: 'EBS', value: '30.12%', PBvalue: 1.25, color: 'rgb(241,106,129)' },
    { id: 2, name: 'S3', value: '36.14%', PBvalue: 1.5, color: 'rgb(140,195,206)' },
    { id: 3, name: 'GLACIER', value: '18.07%', PBvalue: 0.75, color: 'rgb(222,176,0)' },
    { id: 4, name: 'OTHER', value: '15.66%', PBvalue: 0.65, color: 'rgb(148,161,21)' },
]

const dataForUtilization = [
    {
        id: 1,
        name: 'CPU',
        read: [10, 8, 9, 11, 10, 8, 9, 10, 11, 10, 12, 11, 10, 11, 10, 9, 8, 9, 11, 10, 9, 8, 10, 11, 10]
    },
    {
        id: 2,
        name: 'I/O',
        read: [140, 180, 129, 169, 115, 170, 140, 180, 129, 169, 115, 170, 140, 180, 129, 169, 115, 170, 140, 180, 129, 169, 115, 170, 140, 180, 129, 169],
        write: [100, 140, 130, 145, 150, 148, 100, 140, 130, 145, 150, 148, 100, 140, 130, 145, 150, 148, 100, 140, 130, 145, 150, 148, 100, 140, 130, 145]
    },
    {
        id: 3,
        name: 'DISK',
        input: [24, 28, 32, 25, 27, 25, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32,],
        output: [53, 49, 52, 50, 48, 51, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52,]
    }
]

// const graphDataForCompliance = [
//     { id: 1, name: 'CLOUD OP', value: 25, color1: '#f9f9f9', color2: '#870041', rotation: 405 },
//     { id: 2, name: 'SOX',value: 60, color1: '#eeeeee', color2: '#ab0056', rotation: 405 },
//     { id: 3, name: 'PATCHING',value: 75, color1: '#f9f9f9', color2: '#ef228a', rotation: 475 },
//     { id: 4, name: 'CERTIFICATES',value: 65, color1: '#eeeeee', color2: '#ff0087', rotation: 488 },
//     { id: 5, name: 'TAGGING',value: 50, color1: '#f9f9f9', color2: '#ff008c', rotation: 467 },
//     { id: 6, name: 'SECURITY',value: 28, color1: '#eeeeee', color2: '#ff0087', rotation: 457 },
// ]

const ComplianceGraphData = [
    {
        id: 1,
        name: 'TAGGING',
        percentage: 25,
        mainRadiusColor: '#f9f9f9',
        progressRadiusColor: '#870041',
    },
    {
        id: 2,
        name: 'SOX',
        percentage: 60,
        mainRadiusColor: '#eeeeee',
        progressRadiusColor: '#ab0056',
    },
    {
        id: 3,
        name: 'PATCHING',
        percentage: 75,
        mainRadiusColor: '#f9f9f9',
        progressRadiusColor: '#ff0087',
    },
    {
        id: 4,
        name: 'CERTIFICATES',
        percentage: 65,
        mainRadiusColor: '#eeeeee',
        progressRadiusColor: '#ff0087',
    },
    {
        id: 5,
        name: 'TAGGING',
        percentage: 50,
        mainRadiusColor: '#f9f9f9',
        progressRadiusColor: '#ff008c',
    },
    {
        id: 6,
        name: 'SECURITY',
        percentage: 28,
        mainRadiusColor: '#eeeeee',
        progressRadiusColor: '#ff0087',
    },
]


const DynamicElementGraphData = [
    {
        id: 1,
        name: 'COST',
        icon: CostIcon,
        graphData: dataForCost,
        bottomContaint: {
            value: 24000,
            startUnit: '$',
            endUnit: '',
            rightTop: '/Day',
            rightDown: 'Run Rate'
        },
        thirdBox: [
            {
                value: 0.40,
                startUnit: '$',
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
            value: 3400000,
            startUnit: '',
            endUnit: '',
            rightTop: 'Requests',
            rightDown: 'Last 5 hours 30 minutes'
        },
        bottomExtra: {
            value: 3412,
            anothervalue: 'Unique Visitors'
        },
        thirdBox: [
            {
                value: 30500,
                unit: 'TMNG'
            },
            {
                value: 10000,
                unit: 'SOCL'
            },
            {
                value: 17400,
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
            value: 6500,
            startUnit: '$',
            endUnit: '',
            rightTop: 'current',
            rightDown: 'instances'
        },
        bottomExtra: {
            value: 25000,
            anothervalue: 'Unique Last 30 days'
        },
        thirdBox: [
            {
                value: 153,
                unit: 'LBs'
            },
            {
                value: 57,
                unit: 'ASG'
            },
            {
                value: 132,
                unit: 'S3'
            },
            {
                value: 9000,
                unit: 'EBS'
            }
        ]


    },
    {
        id: 4,
        name: 'UTILIZATION',
        icon: UtilizationIcon,
        graphData: dataForUtilization,
        bottomContaint: {
            value: 39,
            startUnit: '',
            endUnit: '%',
            rightTop: '',
            rightDown: 'Overall'
        },
        thirdBox: [
            {
                value: 12,
                unit: 'CPU'
            },
            {
                value: 35,
                unit: 'I/O'
            },
            {
                value: 80,
                unit: 'DISK'
            }
        ]
    },
    {
        id: 5,
        name: 'COMPLIANCE',
        icon: CompleanceIcon,
        graphData: ComplianceGraphData,
        bottomContaint: {
            value: 99.82,
            startUnit: '',
            endUnit: '%',
            rightTop: 'Compliance',
            rightDown: 'All Apps'
        },
        bottomExtra: {
            value: 58,
            anothervalue: 'Rules'
        },
        thirdBox: [
            {
                value: 98.4,
                sign: '%',
                unit: 'TMNG',
            },
            {
                value: 98.1,
                sign: '%',
                unit: 'REBL'
            },
            {
                value: 96.7,
                sign: '%',
                unit: 'SOCL'
            }
        ],
        complianceL1Bottom: [
            {
                id: 1,
                value: 200000,
                purpose: 'Scanned'
            },
            {
                id: 2,
                value: 25,
                purpose: 'Issues Found'
            },
            {
                id: 3,
                value: 0.001,
                percentSign: '%',
                purpose: 'Items with issues'
            }
        ]
    },
    {
        id: 6,
        name: 'STORAGE',
        icon: StorageIcon,
        graphData: dataForStorage,
        bottomContaint: {
            value: 4.15,
            startUnit: '',
            endUnit: '',
            rightTop: '',
            rightDown: 'PB In Use'
        },
        thirdBox: [
            {
                value: 1.25,
                sign: 'PB',
                unit: 'EBs'
            },
            {
                value: '1.50',
                sign: 'PB',
                unit: 'S3'
            },
            {
                value: 0.65,
                sign: 'PB',
                unit: 'Other'
            }
        ]
    },

]

export default DynamicElementGraphData;