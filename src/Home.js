import React, {PureComponent} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './Components/AppBar/AppBar.component';
import './Home.css';

class Home extends PureComponent {
    render() {
        return (
            <MuiThemeProvider>
                <div className="Home">
                    <AppBar/>
                    <header className="Home-header">
                        <h1 className="Home-title">GitFilm</h1>
                    </header>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Home;
