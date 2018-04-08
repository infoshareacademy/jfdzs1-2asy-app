import React, {Component} from 'react';
import SearchBar from 'material-ui-search-bar';
import ItemsList from '../../Components/ItemList';

const url = 'https://gitfilm-api.firebaseio.com/movies.json'

class SearchForm extends Component {
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

        return (
            <SearchBar hintText='Wpisz szukany film'
                       onChange={() => {
                           console.log('onChange');
                           // this.change;
                       }}
                       onRequestSearch={() => {
                           console.log('onRequestSearch');
                           console.log(this.state.items);

                           // this.state.items.forEach(function (item) {
                           //     <ItemsList items={items}/>
                           //         document.write(item.Actors);
                           //     });

                       }}
                       style={{
                           margin: '0 auto',
                           maxWidth: 700,
                       }}
            />
        )
    }
}

export default SearchForm;
