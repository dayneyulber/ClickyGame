
import React, { Component } from 'react';
import "../styles/Navbar.css";

export default class Navbar extends Component {

  render() {
    return(
      <div>
        <nav>
          <div className="row">
            <div className="nav-item col-2"> <h1 className="navbar-brand my-auto">Rap-Up</h1> </div>
            <div className="nav-item col-2 my-auto"> Your score : {this.props.score} | High score : {this.props.topScore} </div>
          </div>
        </nav>
      </div>
    )
  }


}