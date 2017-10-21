import React, { Component } from 'react'

class AddUser extends Component {
  render() {
    return (
      <div>
        <div>Add User</div>
        <div></div>
        <form onSubmit={this.onSubmit.bind(this)} >
            <section>
                <label>Fiirst name</label>
                <input type= 'text' ref=  'first_name' />
            </section>
            <section>
                <label>Last name</label>
                <input type= 'text' ref=  'last_name' />
            </section>
            <section>
                <label>Type</label>
                <input type= 'text' ref=  'type' />
            </section>
            <section>
                <label>Avatar</label>
                <input type= 'file' ref=  'avatar' />
            </section>
            <button type= 'submit'>Save</button>
        </form>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.router.push('/home');
  }
}

export default AddUser;