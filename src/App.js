import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car'
//For Import the Routing part
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import About from './About'

class Home extends Component {
    render(){
        return (<h1>
            <Link to={`/cars`} >Car</Link><br/>
            <Link to={`/about`} >About</Link>
        </h1>);
    }
}

// More components
class App extends Component {

  showAlert(){
      alert("Welcome to my first React app made by himanshu");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
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
