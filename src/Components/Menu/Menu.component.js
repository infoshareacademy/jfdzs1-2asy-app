import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

class Menu extends React.Component {

    render() {
        return (
            <div>
                <MenuItem containerElement={<Link to="/" />}>Dashboard</MenuItem>
                <MenuItem containerElement={<Link to="/search" />}>Wyszukiwarka</MenuItem>
                <MenuItem containerElement={<Link to="/favorite" />}>Ulubione</MenuItem>
                <MenuItem containerElement={<Link to="/best" />}>100 Najlepszych</MenuItem>
                <MenuItem containerElement={<Link to="/worst" />}>100 najgorszych</MenuItem>
            </div>
        );
    }
}

export default Menu;
