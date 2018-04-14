import React, { Component } from 'react';
import {sortByDate} from "../../utils";

class SortSelect extends Component {

    sortByDate = (e) => {
        e.preventDefault();
        console.log("click to sort")


}
    sortByRating = (e) => {
        e.preventDefault();
        console.log("click to sort")
    }

    render() {
        return(
            <div>
                <button onClick={this.sortByDate}>sort by date</button>
                <button onClick={this.sortByRating}>sort by rating</button>
            </div>
        )
    }
}

export default SortSelect;