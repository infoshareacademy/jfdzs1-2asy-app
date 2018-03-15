import React, {PureComponent} from 'react';
import AppBar from './Components/AppBar/AppBar.component';
import './Home.css';

class Home extends PureComponent {
    render() {
        return (
            <div className="Home">
                <AppBar/>
                <header className="Home-header">
                    <h1 className="Home-title">GitFilm</h1>
                </header>
            </div>
        );
    }
}

export default Home;
