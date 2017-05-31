/**
 * Created by himanshu on 30/5/17.
 */
import React,{Component} from 'react';

class Car extends Component {

    constructor(props) {
        super(props);
        this.state = {carArray: ["Acura",
            "Alfa Romeo.",
            "Aston Martin.",
            "Audi.",
            "Bentley",
            "BMW.",
            "Bugatti.",
            "Buick."]}
    }

    render(){

        return (
            <div>
            <h1>Cars page</h1>
             {this.state.carArray.map(car => {return <li key={car}>{car}</li>}) }
         </div>
        );
    }
}

export default Car