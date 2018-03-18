import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 200,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const Dashboard = () => (
    <div>
        <Paper style={style} zDepth={1}><h2>Wyszukiwarka</h2></Paper>
        <Paper style={style} zDepth={1}><h2>Najlepsze</h2></Paper>
        <Paper style={style} zDepth={1}><h2>Najgorsze</h2></Paper>
        <Paper style={style} zDepth={1}><h2>Ulubione</h2></Paper>
    </div>
);

export default Dashboard;
