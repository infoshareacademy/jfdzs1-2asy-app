import React, { PureComponent } from 'react';
import ItemsList from '../../Components/ItemList';
import './BestMovies.style.css';
import SortSelect from '../../Components/SortSelect/SortSelect';
import { sortByValue } from "../../utils";

const url = 'https://gitfilm-api.firebaseio.com/movies.json'
class BestMovies extends PureComponent {
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
        } else if (!isLoaded) {
            return <div>Loading... </div>;
        } else {
            const sortedItems = sortByValue(items, "imdbRating")
            sortedItems.splice(50, (items.length + 50))
            return (
                <ItemsList items={sortedItems}/>
            );
        }
    };

    onChangeSortBy = (sortBy) => {
        const items = this.state.items
        sortByValue(items, sortBy)
    }



    render() {
        return (
            <div>
                <h2>Best Movies</h2>
                <SortSelect onChange={this.onChangeSortBy} />
                {this.renderBody()}
            </div>
        )
    }
}

export default BestMovies;
