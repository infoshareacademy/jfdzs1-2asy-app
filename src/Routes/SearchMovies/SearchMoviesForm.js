import React, { Component } from 'react';
import {fetchData} from "../../utils";
import SearchBar from 'material-ui-search-bar'

class SearchForm extends Component {

    // state = {
    //     value: ''
    // }
    //
    // change = (e) => {
    //         this.setState({
    //               value: e.target.value
    //         })
    // }

    render() {
        fetchData();
        return (
            <SearchBar hintText='Wpisz szukany film'
                onChange={() => {
                    console.log('onChange');
                    // this.change;
                }}
                onRequestSearch={() => {
                    console.log('onRequestSearch');

                }}
                style={{
                    margin: '0 auto',
                    maxWidth: 700,
                }}
            />
        )
    }
}
export default SearchForm;
