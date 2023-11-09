import CostIcon from '../Assets/IconImage/dollar.png';

const data = [
    { name: "JUN", 'ACTUAL COST': 690000, 'PROJECTED COST': 498000, 'ACTUAL RUN RATE': 800000 },
    { name: "JUL", 'ACTUAL COST': 500000, 'PROJECTED COST': 600000, 'ACTUAL RUN RATE': 900000 },
    { name: "AUG", 'ACTUAL COST': 600000, 'PROJECTED COST': 750000, 'ACTUAL RUN RATE': 850000 },
    { name: "SEP", 'ACTUAL COST': 300000, 'PROJECTED COST': 620000, 'ACTUAL RUN RATE': 870000 },
    { name: "OCT", 'PROJECTED COST': 520000, 'ACTUAL RUN RATE': 900000 },
    { name: "NOV", 'PROJECTED COST': 650000, 'ACTUAL RUN RATE': 600000 },
];

const DynamicElementGraphData = [
    {
        id: 1,
        name: 'COST',
        icon: CostIcon,
        graphData: data,
        bottomContaint:{
            value:'$24.0K',
            rightTop:'/Day',
            rightDown:'Run Rate'
        },
        thirdBox:[
            {
                value:'$0.40',
                unit:'/Instance HR'
            }
        ]
    },
    {
        id: 2,
        name: 'MONITORING',
        icon: CostIcon,
    },
    {
        id: 3,
        name: 'INVENTORY',
        icon: CostIcon,
    },
    {
        id: 4,
        name: 'UTILIZATION',
        icon: CostIcon,
    },
    {
        id: 5,
        name: 'COMPLIANCE',
        icon: CostIcon,
    },
    {
        id: 6,
        name: 'STORAGE',
        icon: CostIcon,
    },

]

export default DynamicElementGraphData;