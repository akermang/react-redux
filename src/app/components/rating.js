import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class RatigPage extends Component {
  render() {
    return (
      <div>
        <div>Rating Page</div>
        <form id="rating">
          <select name="carlist" form="carform">
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <section>
            <label>Coments:</label>  
            <textarea/>
          </section>
          <button onClick= {this.SaveRating.bind(this)}>Save rating</button>
          <button onClick= {this.back.bind(this)}>Back</button>
        </form>
      </div>
    )
  }

  back() {
    browserHistory.push('home');
  }

  SaveRating () {
    browserHistory.push('home');
  }
}

export default RatigPage
