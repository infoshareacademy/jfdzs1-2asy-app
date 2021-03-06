import React, { PureComponent } from 'react';
import ItemsList from '../../Components/ItemList';
import './BestMovies.style.css';
import { sortByBestRatingValue, sortDate } from "../../utils";

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
                        items: result.sort(sortByBestRatingValue)
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
            this.state.items.splice(50, (items.length + 50))
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
        const _items = [...this.state.items.sort(sortByBestRatingValue)]
        e.preventDefault();
        this.setState({
            items: _items
        })
    }

    render() {
        return (
            <div>
                <h2>Best Movies</h2>
                <div>
                    <button onClick={this.sortByDate}>sort by date</button>
                    <button onClick={this.sortByRating}>sort by rating</button>
                </div>
                {this.renderBody()}
            </div>
        )
    }
}

export default BestMovies;
