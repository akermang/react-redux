import React, { Component } from 'react'
import RenderTask from './renderTask';

class TaskPage extends Component {
    constructor(props) {
        super(props); 
        // const userId = this.props.route.user.id       
        // const getUsers = this.props.route.getUsers;
        const getTasks = this.props.route.getTasks;

        // getUsers(this.getResponse.bind(this));
        getTasks(this.getResponse.bind(this));
        this.state = {
            users: [],
            tasks:[],
            user: this.props.user,
            showUserTasks: []
        }
    }

    getResponse(users) {
        this.setState({users: users
        });
        console.log(users)
    }

    getResponse(tasks) {
        this.setState({tasks: tasks
        });
    }

    getUserTaskComponet() {
        if(this.state.showUserTasks) {
            return <div className= 'userTasks'>
                <RenderTask user={this.state.user}/> 
            </div>
        }
    }

    handleClick(bolian) {
        if(bolian !== this.state.showUserTasks) {
            this.setState({showUserTasks: true})
        }else{
            this.setState({selectedWorker: false})
        }
       
    }
    
  render() {
    
      console.log('users: ' + this.state.users)
      console.log('tasks: ' + this.state.tasks)
      console.log('user: ' + this.state.user)

    return (
      <div>
          <div>
              <label>worker name: </label>
              <section>
                 <button onClick={(e) => this.handleClick()}>Show worker tasks</button>
              </section>
              {/* {this.getUserTaskComponet()} */}
              
          </div>
        <h2> New  Asign:</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
        <section>
            <label>Description:</label>
            <textarea type= 'text' placeholder= 'Description'/>  
        </section>
        <section>
            <label>Due Date:</label>
            <input type= 'text' placeholder= 'Due Date'/>  
        </section>
        <section>
            <label>Status:</label>
            <input type= 'text' placeholder= 'Status'/>  
        </section>
        <button type="reset" value="Reset">Reset</button>
        <button type= 'submit'  >send task</button>
        <button type="button">add workers for this task</button>
        <button type="button" onClick= {this.backHome.bind(this)} >Back</button>
        </form>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.router.push('/home');  
  }

  backHome(e) {
    this.props.router.push('/home');
  }
}



export default TaskPage;
