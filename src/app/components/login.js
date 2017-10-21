import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props)               
    }

    render() {
        return(
            <div>
                <div>login</div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <section>
                        <label>username</label>
                        <input ref="username" type="text"/>
                    </section>
                    <section>
                        <label>password</label>
                        <input ref="password" type="password"/>
                    </section>
                    <button type="submit">submit</button>
                </form>
            </div>  
        )
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.props.route.isAuthenticated){
            this.props.router.push('/home');
        }else{
            alert('wrong credentials')
        }
    }

}

export default Login;