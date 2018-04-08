import React, { Component } from 'react';


class SortSelect extends Component {
    change = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
        return(
            <div>
                <select onChange={this.change} className="custom-select">
                    <option value="0">Sort By:</option>
                    <option value="imdbRating">iMDB Rating</option>
                    <option value="Year">Released Date</option>
                </select>
            </div>
        )
    }
}

export default SortSelect;