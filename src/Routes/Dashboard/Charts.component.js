import React from 'react';
import {PieChart, Pie, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data01 = [
    {name: 'Komedia', value: 40},
    {name: 'Dramat', value: 3},
    {name: 'Sensacja', value: 15},
    {name: 'Horror', value: 50}]

const data = [
    {name: 'Poniedziałek', uv: 868, amt: 1506},
    {name: 'Wtorek', uv: 1397, amt: 989},
    {name: 'Środa', uv: 1480, amt: 1228},
    {name: 'Czwartek', uv: 1520, amt: 1100},
    {name: 'Piątek', uv: 1400, amt: 1700},
    {name: 'Sobota', uv: 1400, amt: 1700},
    {name: 'Niedziela', uv: 1400, amt: 1700}];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    return data01[index].name;
};

export const TwoLevelPieChart = () => {
    return (
        <PieChart width={400} height={400}>
            <Pie dataKey='value' data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8" label={renderCustomizedLabel}/>
        </PieChart>
    );
}

export const SameDataComposedChart = () => {
    return (
        <ComposedChart width={730} height={250} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
        </ComposedChart>
    );
}
