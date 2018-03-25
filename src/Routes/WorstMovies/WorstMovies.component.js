import React, { PureComponent } from 'react';
import FetchForm from '../../Components/FetchForm';
import ItemsList from '../../Components/ItemList';
import './WorstMovies.style.css';

const url = 'https://gitfilm-675bb.firebaseio.com/asy-app.json'
class WorstMovies extends PureComponent {

    state = {
        fetchedItems: []
    }

    fetchData = (fetchItems) => {
        fetch(url)
        .then(response => response.json())
        .then(Object.values)
        .then(fetchedItems => {
            this.setState({
                fetchedItems,
            })
        })
    }
    render() {
        const { fetchedItems } = this.state
        return(
            <div>
                <h2>Worst Movies</h2>
                    <FetchForm onClick={this.fetchData} />
                        <div>
                            {fetchedItems.map(({thumbnail, name, rating}) => (
                                <ItemsList key={thumbnail} thumbnail={thumbnail}
                                       name={name}
                                       rating={rating} />
                        ))}
                        </div>
            </div>
        )
    }
}

export default WorstMovies;
