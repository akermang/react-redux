import React,  { Component } from 'react';
import UserInfo from './userInfo';

class UsersList extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isToggleOn: true,
            selectedWorker: null
        }        
    }
    handleClick(user) {
        if(user !== this.state.selectedWorker) {
            this.setState({selectedWorker: user})
        }else{
            this.setState({selectedWorker: null})
        }
       
    }

    getUserInfoComponet() {
        if(this.state.selectedWorker) {
            return <div className= 'users-info'>
                <h1>Information:</h1>
                <UserInfo user={this.state.selectedWorker}/> 
            </div>
        }
    }

    render() {
        const users = this.props.users || [];
        return(
            <div>
                <div className="users-list"><h1>Workers: </h1>
                {
                    users.map((user, i) => {
                        return <div className= {this.getItemClassName(user)} key={i}
                            onClick={(e) => this.handleClick(user)} >
                            {user.first_name} {user.last_name}                  
                        </div>                                            
                    })
                }
                </div>
                {this.getUserInfoComponet()}
            </div>
        )
    }

    getItemClassName(user) {
        return this.state.selectedWorker === user ? "user selected" : "user"
    }

}



export default UsersList;
