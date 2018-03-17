import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Navigation from './Components/Navigation/Navigation.component';
import Dashboard from "./Routes/Dashboard/Dashboard.components";
import SearchMovies from "./Routes/SearchMovies/SearchMovies.component";
import WorstMovies from "./Routes/WorstMovies/WorstMovies.component";
import FavouriteMovies from "./Routes/FavoriteMovies/FavoriteMovies.component";
import BestMovies from "./Routes/BestMovies/BestMovies.components";
import './Home.css';

class Home extends PureComponent {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <BrowserRouter>
                    <div className="Home">
                        <Navigation/>
                        <Route path='/dashboard' component={Dashboard}/>
                        <Route path='/favourite' component={FavouriteMovies}/>
                        <Route path='/search' component={SearchMovies}/>
                        <Route path='/best' component={BestMovies}/>
                        <Route path='/worst' component={WorstMovies}/>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default Home;
