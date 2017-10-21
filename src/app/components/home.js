import React,  { Component } from 'react';
import UsersList from './usersList';
import {Link} from 'react-router';

class Home extends Component {
    constructor(props) {
        super(props);        
        const getUsers = this.props.route.getUsers;
        getUsers(this.getResponse.bind(this));
        this.state = {
            users: []
        }
    }

    getResponse(users) {
        users.forEach(function(element) {
            element.age = 32;
        }, this);
        this.setState({
            users: users
        });
    }

    render() {        
        return(
            <div className= "home">
                home
                <div>
                    <nav>
                        <li>
                        <Link to='/report'>go to report</Link>
                        </li>
                        <li>
                        <Link to='/login'>go to login</Link>
                        </li>
                        <li>
                        <Link to='/add/user'>Add usser</Link>
                        </li>
                        <li>
                        <Link to='task/user/:id'>Add Task</Link>
                        </li>
                        <li>
                        <Link to='render/task'>Render Task</Link>
                        </li>
                    </nav>   
                </div>
                
                <UsersList users={this.state.users}/>
            </div>  
        )
    }

}

export default Home;
