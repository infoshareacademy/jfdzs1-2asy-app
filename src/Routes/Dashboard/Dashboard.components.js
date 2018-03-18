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
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={2} />
        <Paper style={style} zDepth={3} />
    </div>
);

export default Dashboard;
