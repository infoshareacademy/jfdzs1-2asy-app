import React, { Component } from 'react';
import './ItemList.css';

class ItemsList extends Component {
    render() {
        return (
            <div>
            {this.props.items.map(item => (
                <div key={item.Title} className="item">
                    <div><h4>{item.Title}</h4></div>
                    <div>
                        {item.Poster ? <img src={item.Poster} alt="" /> :
                            <span>NO IMAGE</span>
                        }
                    </div>
                    <div><h5>Genre: {item.Genre}</h5></div>
                    <div><h5>Released Year: {item.Year}</h5></div>
                    <div><h5>Imdb Rating: {item.imdbRating}</h5></div>
                    <div><h5>Imdb Votes: {item.imdbVotes}</h5></div>
                    <div>{item.Ratings.map(i => (
                        <div key={i.Source}>
                            <h5>{i.Source} {i.Value}</h5>
                        </div>
                    ))}</div><br />
                </div>
            ))}
            </div>
        );
    }
}

export default ItemsList;