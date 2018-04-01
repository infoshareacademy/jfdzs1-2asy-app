import React, { Component } from 'react';

class ItemsList extends Component {
    render() {
        return (
            <div>
            {this.props.items.map(item => (
                <div key={item.name}>
                    <div><h4>Tytuł: {item.name}</h4></div>
                    <div>
                        {item.thumbnail ? <img src={item.thumbnail} alt="" /> :
                            <span>NO IMAGE</span>
                        }
                    </div>
                    <div><h4>Rating: {item.rating}</h4></div>
                </div>
            ))}
            </div>
        );
    }
}

export default ItemsList;