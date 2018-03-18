import React, { PureComponent } from 'react';
import Form from './SearchMoviesForm';


class SearchMovies extends PureComponent {

    render() {
        return(
            <div>
                <h2>Search Movies</h2>
                <Form />
            </div>
        )
    }
}

export default SearchMovies;
