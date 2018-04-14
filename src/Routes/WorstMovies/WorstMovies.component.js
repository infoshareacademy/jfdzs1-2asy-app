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
            items.sort(sortByWorstRatingValue);
            this.state.items.splice(50, (items.length + 50));
            return (
                <ItemsList items={items.sort(sortByWorstRatingValue)}/>
            );
        }
    };

    sortByDate = (e) => {
        e.preventDefault();
        this.state.items.sort(sortDate)
        console.log(this.state.items)
    }

    sortByRating = (e) => {
        e.preventDefault();
        this.state.items.sort(sortByWorstRatingValue)
        console.log(this.state.items)
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
