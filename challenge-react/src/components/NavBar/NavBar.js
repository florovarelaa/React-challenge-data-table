import React from 'react';
import Search from '../../containers/Search/Search'

const NavBar = (props) => {
    return (
        <div>
            <h1>USERS</h1>
            <Search />
            {console.log(props.users)}
        </div>
    );
}

export default NavBar;