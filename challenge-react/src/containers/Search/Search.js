import React, { Component } from 'react';

class Search extends Component {
    state = {
        value: '',
    };

    handleClick() {
        //show new user modal
        // <NewUser />
    }

    render(){
        return(
            <div>
                <input placeholder='Search for a User'/>
                <button>Search</button>
                <button onClick={this.handleClick}>New User</button>
            </div>
        )
    }
}

export default Search;