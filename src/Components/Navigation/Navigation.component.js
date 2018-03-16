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
        const contentStyle = { transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

        if (this.state.open) {
            contentStyle.marginLeft = 256;
        }

        return (
            <AppBar
                title="GitFilm"
                children={<Drawer open={this.state.open}><Menu/></Drawer>}
                onLeftIconButtonClick={this.handleToggle}
                style={contentStyle}
            />

        )
    }
}

export default Navigation;
