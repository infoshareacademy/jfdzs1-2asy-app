import React, {PureComponent} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Components/Navigation/Navigation.component';
import './Home.css';

class Home extends PureComponent {
    render() {
        return (
            <MuiThemeProvider>
                <div className="Home">
                    <Navigation/>
                    <header className="Home-header">
                        <h1 className="Home-title">Dashboard</h1>
                    </header>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Home;
