import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/login.js';
import UsersList from './components/usersList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
  }

  render() {

    const routeProps = {
      onSubmit: this.onSubmit
    };

    return (
      <div>
        <header>header</header>

        <div className="container">
          {this.props.children}
        </div>        
        
        <footer>footer</footer>
      </div>                               
    )
  }

  onSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    console.log('username: ', username)
    console.log('password: ', password)
    this.props.router.push('/home');
  }
    
}

function select(state) {
  return state;
}

export default connect(select)(App);
