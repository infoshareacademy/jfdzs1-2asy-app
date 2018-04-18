import React, { PureComponent } from 'react';
import SearchItems from "../../Components/SearchItems/SearchItems";
import FilterItems from '../../Components/FilterItems/FilterItems';

const url = 'https://gitfilm-api.firebaseio.com/movies.json'
class SearchMovies extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentWillMount() {
        fetch(url)
            .then(res => res.json())
            .then(Object.values)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    renderBody = () => {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading... </div>;
        } else {
            return (
                <SearchItems items={items} />
            );
        }
    };


    render() {
        return(
            <div>
                <h2>Search Movies</h2>
                <FilterItems />
                {this.renderBody()}
            </div>
        )
    }
}

export default SearchMovies;
