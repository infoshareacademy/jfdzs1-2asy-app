import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import FavoriteMovies from "./Routes/FavoriteMovies/FavoriteMovies.component";
import SearchMovies from "./Routes/SearchMovies/SearchMovies.component";
import BestMovies from "./Routes/BestMovies/BestMovies.components";
import WorstMovies from "./Routes/WorstMovies/WorstMovies.component";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/favorite' component={FavoriteMovies}/>
            <Route path='/search' component={SearchMovies}/>
            <Route path='/best' component={BestMovies}/>
            <Route path='/worst' component={WorstMovies}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
