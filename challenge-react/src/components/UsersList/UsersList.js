import React from 'react';

const UsersList = (props) => {
        return(
            <div>
                {props.users.map(user => (
                    <li key={user.name}>
                        {user.name}
                    </li>
                ))}
            </div>
        )
}

export default UsersList;