import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './AppComponent';
import './style.css';

class Main extends Component {
  
  render() {
    return (
      <div align="center">
        <h4>Data not passed from MainComponent to AppComponent</h4>
        <p>Displaying Default values of props</p> 
        
        <App />
        <br/>
        <h4>Data passed from MainComponent to AppComponent</h4>
        <App companyName='Wipro Technologies' companyLocation='Hyderabad' />
        

      </div>
    );
  }
}

render(<Main />, document.getElementById('root'));
