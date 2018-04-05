import React from 'react';
import {PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';

const data01 = [
    {name: 'Komedia', value: 40},
    {name: 'Dramat', value: 3},
    {name: 'Sensacja', value: 15},
    {name: 'Horror', value: 50}];

const data = [
    {name: 'Poniedziałek', value: 1},
    {name: 'Wtorek', value: 3},
    {name: 'Środa', value: 2},
    {name: 'Czwartek', value: 4},
    {name: 'Piątek', value: 4},
    {name: 'Sobota', value: 10},
    {name: 'Niedziela', value: 14}];

const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    return data01[index].name;
};

export const TwoLevelPieChart = () => {
    return (
        <ResponsiveContainer width={300} height={300} className="pie-chart">
            <PieChart data={data01}>
                <Pie dataKey='value' data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8"
                     label={renderCustomizedLabel}/>
            </PieChart>
        </ResponsiveContainer>
    );
}

export const SameDataComposedChart = () => {
    return (
        <ResponsiveContainer width={700} height={300} className='barchart'>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name">
                </XAxis>
                <YAxis/>
                <Bar dataKey="value" fill="#8884d8"/>
            </BarChart>
        </ResponsiveContainer>
    );
}
