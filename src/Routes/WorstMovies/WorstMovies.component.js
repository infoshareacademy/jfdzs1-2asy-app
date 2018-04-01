import React, { PureComponent } from 'react';
// import ItemsList from '../../Components/ItemList';
import './WorstMovies.style.css';

const url = 'https://gitfilm-675bb.firebaseio.com/asy-app.json'


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
                    // console.log(this.state.items);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading... </div>;
        } else {
            return (
                <div>
                    <h2>Worst Movies</h2>
                    {items.map(item => (
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

                    {console.log(items)}
                </div>
            );
        }
    }
}

export default WorstMovies;
