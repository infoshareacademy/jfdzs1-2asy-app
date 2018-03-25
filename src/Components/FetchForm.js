import React, { Component } from 'react';

class FetchForm extends Component {
    getMovieList = (e) => {
        e.preventDefault();
        this.props.onClick(this.onClick)
    };
    render() {
        return(
            <button onClick={this.getMovieList}>Zobacz listę Filmów</button>
        )
    }
}

export default FetchForm;