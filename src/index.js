import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import FavMenu from "./Components/FavMenu/FavMenu.component";
import Search from "./Components/SearchMenu/Search.component";
import PopularMenu from "./Components/PopularMenu/PopularMenu.components";
import WorstMenu from "./Components/WorstMenu/WorstMenu.component";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/favorite' component={FavMenu}/>
            <Route path='/search' component={Search}/>
            <Route path='/popular' component={PopularMenu}/>
            <Route path='/worst' component={WorstMenu}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
