import React, { PureComponent } from 'react';
import ItemsList from '../../Components/ItemList';
import {sortByWorstRatingValue, sortDate} from "../../utils";
import './WorstMovies.style.css';

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
                        items: result.sort(sortByWorstRatingValue)
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
        }
        if (!isLoaded) {
            return <div>Loading... </div>;
        } else {
            this.state.items.splice(50, (items.length + 50));
            return (
                <ItemsList items={items}/>
            );
        }
    };

    sortByDate = (e) => {
        const _items = [...this.state.items.sort(sortDate)]
        e.preventDefault();
        this.setState({
            items: _items
        })
    }

    sortByRating = (e) => {
        const _items = [...this.state.items.sort(sortByWorstRatingValue)]
        e.preventDefault();
        this.setState({
            items: _items
        })
    }

    render() {
        return (
            <div>
                <h2>Worst Movies</h2>
                <button onClick={this.sortByDate}>sort by date</button>
                <button onClick={this.sortByRating}>sort by rating</button>
                {this.renderBody()}
            </div>
        )
    }
}

export default WorstMovies;
