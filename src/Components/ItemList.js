import React, { Component } from 'react';


class ItemsList extends Component {
  render() {
    // const items = this.props
    return (
      <div>
          {this.props.items.map(({name, rating, thumbnail}) => (
              <div>
                  <div><h4>Tytuł: {name}</h4></div>
                  <div><h4>Rating: {rating}</h4></div>
                  <div>
                  {thumbnail ? <img src={thumbnail} alt="" /> :
                      <span>NO IMAGE</span>
                  }
                  </div>
              </div>
          ))}
      </div>
    )
  }
}

export default ItemsList;