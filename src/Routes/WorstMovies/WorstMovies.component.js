import React, { PureComponent } from 'react';
import ItemsList from '../../Components/ItemList';
import { sortByValue } from "../../utils";
import SortSelect from '../../Components/SortSelect/SortSelect';
import './WorstMovies.style.css';
import _ from 'lodash';

const url = 'https://gitfilm-api.firebaseio.com/movies.json'
class WorstMovies extends PureComponent {
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
                    });
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
            let sortedItems = sortByValue(items, "imdbRating")


            sortedItems.splice(50, (items.length + 50))

            sortedItems = _.orderBy(sortedItems, ["imdbRating"], ['asc'])
            console.log(sortedItems)
            return (
                <ItemsList items={sortedItems}/>
            );
        }
    };

    onChangeSortBy = (sortBy) => {
        const items = this.state.items
        let sortedItems = sortByValue(items, sortBy)
        this.setState({
        items: sortedItems
        })
    }



    render() {
        return (
            <div>
                <h2>Worst Movies</h2>
                <SortSelect onChange={this.onChangeSortBy} />
                {this.renderBody()}
            </div>
        )
    }
}

export default WorstMovies;
