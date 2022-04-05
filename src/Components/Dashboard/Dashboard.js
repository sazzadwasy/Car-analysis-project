import React from 'react';
import { CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const ChartData = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='flex '>
            <div>
                <h1 className='text-3xl font-semibold text-orange-600'>Line Chart</h1>
                <LineChart width={700} height={500} data={ChartData} >
                    <Line dataKey={'month'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey={'sell'}></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <h1 className='text-3xl font-semibold text-orange-600'>Pie Chart</h1>
                <PieChart width={900} height={400}>
                    <Pie data={ChartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={ChartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;