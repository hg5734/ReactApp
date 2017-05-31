/**
 * Created by himanshu on 31/5/17.
 */


import React,{Component} from 'react';

class About extends Component {

    constructor(props){
        console.log("Constructor",props)
        super(props);
        this.state = {date: new Date(),value:''};

        this.changeValueOfDate = this.changeValueOfDate.bind(this);
    }

    changeValueOfDate(e){
        console.log("change value of date"+e.target.value);
        this.setState({inputValue : e.target.value})
    }

    render(){
        return (<div><h1>About page</h1>
        <h2>Date {this.state.date.toLocaleDateString()}</h2>
            <h3>Input Value {this.state.inputValue}</h3>
        <input type="text" onChange={this.changeValueOfDate}/>

        </div>);
    }
}

export default About;