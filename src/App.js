import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car'
//For Import the Routing part
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return (<h1>
            Routing Define <br/>
            <Link to={`/cars`} >Car</Link><br/>
            <Link to={`/about`} >About</Link>
        </h1>);
    }
}

// More components

class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}
class App extends Component {

  showAlert(){
      alert("Event fired");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={this.showAlert}>Fire Event</button>
          <Router>
              <div>
              <Route path="/" component={Home}/>
              <Route path="/cars" component={Car}/>
              <Route path="/about" component={About}/>
              </div>
          </Router>
      </div>

    );
  }
}

export default App;
