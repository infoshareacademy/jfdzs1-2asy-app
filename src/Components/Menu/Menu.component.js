import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

class Menu extends React.Component {

    render() {
        return (
            <div>
                <MenuItem onClick={this.props.onClick} containerElement={<Link to="/" />}>Dashboard</MenuItem>
                <MenuItem onClick={this.props.onClick} containerElement={<Link to="/search" />}>Wyszukiwarka</MenuItem>
                <MenuItem onClick={this.props.onClick} containerElement={<Link to="/favourite" />}>Ulubione</MenuItem>
                <MenuItem onClick={this.props.onClick} containerElement={<Link to="/best" />}>100 najlepszych</MenuItem>
                <MenuItem onClick={this.props.onClick} containerElement={<Link to="/worst" />}>100 najgorszych</MenuItem>
            </div>
        );
    }
}

export default Menu;
