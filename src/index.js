import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import FavoriteMovies from "./Components/FavoriteMovies/FavoriteMovies.component";
import SearchMovies from "./Components/SearchMovies/SearchMovies.component";
import BestMovies from "./Components/BestMovies/BestMovies.components";
import WorstMovies from "./Components/WorstMovies/WorstMovies.component";

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
