import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mainStore from "./Store/mainStore"
import increaseCount from "./Action/increaseCount";
import{ connect } from "react-redux";
import decreaseCount from "./Action/decreaseCount";


class App extends Component {
  render() {
    return (
      {this.props.increaseCount}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
        <div>{this.props.increaseCount}</div>
        <button>+</button>
        <button>-</button>

        </div>
    );
  }
}

const mapStateToProps = state =>{
  return{counter: state.count };
};

const mapDiscpachToProps = dispatch => {
  return{
    increaseCount: data =>{
      dispatch(increaseCount(data));
    }
  };
};

let componentToExport = connect (mapStateToProps, mapDiscpachToProps)(App);

export default componentToExport;
