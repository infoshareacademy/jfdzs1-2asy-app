import React, {PureComponent} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Navigation from './Components/Navigation/Navigation.component';
import SearchMovies from "./Routes/SearchMovies/SearchMovies.component";
import WorstMovies from "./Routes/WorstMovies/WorstMovies.component";
import FavoriteMovies from "./Routes/FavoriteMovies/FavoriteMovies.component";
import BestMovies from "./Routes/BestMovies/BestMovies.components";
import './Home.css';
import {BrowserRouter, Route} from "react-router-dom";

class Home extends PureComponent {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <BrowserRouter>
                    <div className="Home">
                        <Navigation/>
                        <Route path='/favorite' component={FavoriteMovies}/>
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
