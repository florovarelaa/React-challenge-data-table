import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(
        result => {
          this.setState ({
            isLoaded: true,
            users: result,
          });
        },
        error => {
          this.setState ({
            isLoaded: false,
            error
          });
        }
    )
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <NavBar users={this.state.users} />
          {users.map(user => (
            <li key={user.name}>
              {user.name} {user.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
