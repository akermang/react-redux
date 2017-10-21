import React,  { Component } from 'react';
import {browserHistory} from 'react-router';
import TaskPage from './task';

class UserInfo extends Component {
    constructor(props) {
        super(props);      
    }
    
    render() {
        const user = this.props.user
        return(
            <div className= "user-info">
                <section className='user-name'> {user.first_name + ' ' + user.last_name}</section>
                <section className='type'> {user.type }</section>
                <button onClick={ () => this.onClick() }>Add task</button>
                <button onClick={ () => this.ratingUpdate() }>Rating</button>
            </div>  
        )
    }

    onClick() {
        browserHistory.push('/task/user/'+this.props.user.id)
    }

    ratingUpdate() {
        browserHistory.push('rating/user/'+this.props.user.id)
    }
}

export default UserInfo;
