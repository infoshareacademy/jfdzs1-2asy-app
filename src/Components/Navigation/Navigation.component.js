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
                children={<Drawer

                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <Menu/></Drawer>}
                onLeftIconButtonClick={this.handleToggle}
            />
        )
    }
}

export default Navigation;
