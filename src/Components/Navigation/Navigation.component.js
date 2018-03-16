import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from "../Menu/Menu.component";

class Navigation extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <AppBar
                title="GitFilm"
                children={<Drawer open={this.state.open}><Menu/></Drawer>}
                onLeftIconButtonClick={this.handleToggle}
                onRightIconButtonClick={this.handleToggle}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

        )
    }
}

export default Navigation;
