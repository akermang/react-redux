import React, { Component } from 'react'
import {browserHistory} from 'react-router'

class Report extends Component {
  render() {
    return (
      <div>
        <div>Report</div>
        <form onSubmit={this.onSubmit.bind(this)} >
            <section>
            <textarea ref="report" /> 
            </section>
            <button type= 'submit'>Send Report</button>    
            <button type= 'reset'>Clear Report</button>
            <button onClick= {this.back.bind(this)}>Back</button>
        </form>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    // this.props.router.push('/home'); 
    browserHistory.push('home'); 
  }

  back() {
    browserHistory.push('home');
  }
}

export default Report;
