import React, { Component } from 'react';

class Search extends Component {
    state = {
        value: '',
    }

    render(){
        return(
            <div>
                <input placeholder='Search for a User'/>
                <button value='Search'/>
            </div>
        )
    }
}

export default Search;