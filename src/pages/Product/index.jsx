
import React, { Component} from 'react';
import  axios from 'axios';


class Product extends Component {
        constructor(props){
            super(props);
            
            console.log(props);
            this.state = {
                id: props.match.params.id,
                data: {},
            }

            //this.onSearch = this.onSearch.bind(this);
        }

    componentDidMount(){
        //axios.get(`'https://api.mercadolibre.com/items/${this.state.id}`)
        axios.get(`'https://api.mercadolibre.com/items/${this.state.id}?attributes=title,price,initial_quantity,pictures,condition`) 
        .then((response) => {
            this.setState({data: response.data});
            //console.log(response.data);
        });
        
        //console.log('chamei o componentDidMount');
    }

    componentWillMount(){
        console.log('chamei o componentWillMount');
        
    }

    render(){
        return(<div>oi</div>)
    }

}

export default Product;