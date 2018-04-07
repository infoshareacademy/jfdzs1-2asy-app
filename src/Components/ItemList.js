import React, { Component } from 'react';
import './ItemList.css';

class ItemsList extends Component {
    render() {
        return (
            <div>
            {this.props.items.map(item => (
                <div key={item.Title} className="item">
                    <div><h2>{item.Title}</h2></div>
                    <div>
                            {item.Poster ? <img src={item.Poster} alt="" /> :
                                <span>NO IMAGE</span>
                            }
                    </div>
                    <div><h5>Genre: {item.Genre}</h5></div>
                    <div><h5>Released Date: {item.Released}</h5></div>
                    <div><h3>Imdb Rating: {item.imdbRating}</h3></div>
                    <div><h3>Imdb Votes: {item.imdbVotes}</h3></div>
                    <div>{item.Ratings.map(i => (
                        <div key={i.Source}>
                            <h3>{i.Source} {i.Value}</h3>
                        </div>
                    ))}</div><br />
                </div>
            ))}
            </div>
        );
    }
}

export default ItemsList;