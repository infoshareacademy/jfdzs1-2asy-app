import React, { Component } from 'react';
import './SearchItems.css';

class SearchItems extends Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div key={item.Title} className="item">
                        <div>{item.Title}</div>
                        <div>
                            {item.Poster ? <img src={item.Poster} alt="" /> :
                                <span>NO IMAGE</span>
                            }
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SearchItems;