/**
 * Created by himanshu on 1/6/17.
 */

import React from 'react';
import axios from 'axios';

class AjaxCall extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts :''
        };
        this.fetchGooglePage();
    }

    fetchGooglePage(){
        axios.get(`http://localhost:8080`)
            .then(res => {
                console.log("Fetch goog",res)
               // const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts :res.data});
            });
    }

    render(){
        return <div>AJAX:{this.state.posts}</div>
    }
}

export default  AjaxCall;