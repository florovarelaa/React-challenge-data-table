import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import UsersList from './components/UsersList/UsersList';
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
          <div>
              <NavBar users={this.state.users} />
              <UsersList users={this.state.users}/>
          </div>
      );
    }
  }
}

export default App;
