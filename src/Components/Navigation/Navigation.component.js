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
                onLeftIconButtonClick={this.handleToggle}>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={this.handleToggle}>
                    <Menu onClick={this.handleToggle}/>
                </Drawer>
            </AppBar>
        )
    }
}

export default Navigation;
