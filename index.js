import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import axios from 'axios';
import _ from 'lodash';
const Hello = React.createClass({
   render(){
     return(
            <div>
                Hello World
            </div>
       );
   }
})

//render the app
ReactDOM.render(<Hello/>,document.getElementById('container'))