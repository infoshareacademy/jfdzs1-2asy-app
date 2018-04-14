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
            items.sort(sortByBestRatingValue)
            this.state.items.splice(50, (items.length + 50))
            console.log(this.state.items)
            return (
                <ItemsList items={items}/>
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
        this.state.items.sort(sortByBestRatingValue)
        console.log(this.state.items)
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
