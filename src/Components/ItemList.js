import React, { Component } from 'react';

class ItemsList extends Component {
    render() {
        return (
            <div>
            {this.props.items.map(item => (
                <div key={item.Title}>
                    <div><h4>{item.Title}</h4></div>
                    <div>
                        {item.Poster ? <img src={item.Poster} alt="" /> :
                            <span>NO IMAGE</span>

                        }

                    </div>
                    <div><h4>Imdb Rating: {item.imdbRating}</h4></div>
                    <div><h4>Imdb Votes: {item.imdbVotes}</h4></div>
                    {/*<div>{item.Ratings.map(i => (*/}
                        {/*console.log(i)*/}
                    {/*))}</div>*/}
                    {/*//TODO - ADD ROTTEN TOMATOES*/}
                    <div><h4>Metacritic: {item.Metascore}</h4></div><br />
                </div>
            ))}
            </div>
        );
    }
}

export default ItemsList;