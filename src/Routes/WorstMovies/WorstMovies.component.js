import React, { PureComponent } from 'react';
import ItemsList from '../../Components/ItemList';
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
            .then(
                (result) => {
                    console.log('result');
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(this.state);
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

            return (
                <ItemsList />
            );
        }
    };

//
    render() {
        const state = this.state
        return(
            <div>
                <h2>Best Movies</h2>
                <div>
                    {this.renderBody()}
                    {console.log(state)}

                </div>
            </div>
        )
    }
}

export default WorstMovies;
