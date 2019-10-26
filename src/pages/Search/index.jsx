import React, { Component} from 'react';
import  axios from 'axios';
import { tsImportEqualsDeclaration } from '@babel/types';


class Search extends Component {
        constructor(){
            super();
            this.state = {
                results: [],
            }

            //this.onSearch = this.onSearch.bind(this);
        }



    onSearch = (event) => {
        console.log('event', event.currentTarget.value);
        const {value} = event.currentTarget;

        axios.get('https://api.mercadolibre.com/sites/MLB/search?q=${value}')
        .then(({ data }) => {
          // handle success
          //console.log(data);
          this.setState({
              results: data.results,
          })      
        })
        .catch((error) => {
          // handle error
          console.log(error);
        }); 



    }

    renderItem(item){
        return (
            <li key={`item_${item.id}`} >
                { item.title}
            </li>
        );
    }

    render () {
        return (            
            <div>
                <input type="text" onChange={this.onSearch}/>

                <ul>
                    { this.state.results.map(this.renderItem) }                    
                </ul>    
            </div>    


        );
    }


}

export default Search;