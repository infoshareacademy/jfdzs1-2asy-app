import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import {TwoLevelPieChart, SameDataComposedChart} from "./Charts.component";

import './Dashboard.style.css'

const Dashboard = () => (
    <div>
        <Grid fluid>
            <Row>
                <Col md={6} lg={3}>
                    <Link to='/search'><img src={`${process.env.PUBLIC_URL}/Images/search.jpg`} alt=""
                                            className="img-function"/></Link>
                    <Link to='/search'><span>Wyszukiwarka</span></Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to='/best'><img src={`${process.env.PUBLIC_URL}/Images/best.jpg`} alt=""
                                          className="img-function"/></Link>
                    <Link to='/best'><span>Najlepsze</span></Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to='/worst'><img src={`${process.env.PUBLIC_URL}/Images/worst.jpg`} alt=""
                                           className="img-function"/></Link>
                    <Link to='/worst'><span>Najgorsze</span></Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to='/favourite'><img src={`${process.env.PUBLIC_URL}/Images/favourite.jpg`} alt=""
                                               className="img-function"/></Link>
                    <Link to='/favourite'><span>Ulubione</span></Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className="pie-chart">
                    <TwoLevelPieChart/>
                </Col>
                <Col xs={12} lg={6}>
                    <SameDataComposedChart/>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Dashboard;
