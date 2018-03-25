import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './Dashboard.style.css'

const Dashboard = () => (
    <div>
        <Grid fluid>
            <Row>
                <Col md={6} lg={3}>
                    <img src={`${process.env.PUBLIC_URL}/Images/search.jpg`} alt="" className="img-function"/>
                    <span>Wyszukiwarka</span>
                </Col>
                <Col md={6} lg={3}>
                    <img src={`${process.env.PUBLIC_URL}/Images/best.jpg`} alt="" className="img-function"/>
                    <span>Najlepsze</span>
                </Col>
                <Col md={6} lg={3}>
                    <img src={`${process.env.PUBLIC_URL}/Images/worst.jpg`} alt="" className="img-function"/>
                    <span>Najgorsze</span>
                </Col>
                <Col md={6} lg={3}>
                    <img src={`${process.env.PUBLIC_URL}/Images/favourite.jpg`} alt="" className="img-function"/>
                    <span>Ulubione</span>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Dashboard;
