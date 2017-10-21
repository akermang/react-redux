import React, { Component } from 'react'

class RenderTask extends Component {

constructor(props) {
    super(props);
    const getTasks = this.props.route.getTasks;
   
    getTasks(this.getResponse.bind(this));
    this.state = {
        tasks:[]
    }
}
getResponse(tasks) {
    this.setState({tasks: tasks
    });
}

getUserTasks(user) {
    const userId = user.id;
    const userTasks = this.state.tasks.filter(function(task) {
        const filteredTask = task.assigned_to.filter(function(id) {
            return id == userId;
        })
        return filteredTask;
    })
    console.log(userTasks)
    return userTasks;
}


  render() {
    const user = this.props.user
    const userTasks = this.getUserTasks(user);
    return (
      <div>
          <div className= 'tasks'>
                <h1>tasks </h1>
                {
                userTasks.map((task, i) => {
                    return <div  key={i} >
                                <div>descripption:{task.description} </div>
                                <div>assign to:
                                    <li>{user.first_name + ' ' + user.last_name}</li>
                                </div>
                                <div>due date:{task.due_date} </div>
                                <div>status:{task.status} </div>               
                                </div>                                            
                })
                }
          </div>
      </div>
    )
  }
}

export default RenderTask;
