import React, {PureComponent} from 'react';
// import {Link} from 'react-router-dom;';
import AppBar from 'material-ui/AppBar';

class Navigation extends PureComponent {
    render() {
        return (
            <AppBar
                title="GitFilm"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default Navigation;
