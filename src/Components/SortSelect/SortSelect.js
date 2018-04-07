import React, { Component } from 'react';

class SortSelect extends Component {
    render() {
        return(
            <div>
                <select className="custom-select">
                    <option value="0">Sort By:</option>
                    <option value="1">iMDB Rating</option>
                    <option value="2">Released Date</option>
                </select>
            </div>
        )
    }
}

export default SortSelect;