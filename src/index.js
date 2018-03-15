import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/' component={Home}/>
            <Route path='/' component={Home}/>
            <Route path='/' component={Home}/>
            <Route path='/' component={Home}/>
            <Route path='/' component={Home}/>
            <Route path='/' component={Home}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
